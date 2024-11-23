// logoscript.js
window.onload = function() {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let particlesArray = [];
  let numberOfParticles = 1000; // Default total number of particles
  let particleSize = 1; // Default particle size
  
  // FPS parameters
  let lastTime = 0;
  let fps = 60; // Initial FPS assumption
  const minFps = 50;  // Target FPS
  const maxParticles = 1000; // Maximum number of particles
  const minParticles = 200; // Minimum number of particles
  const maxParticleSize = 3; // Maximum particle size
  const minParticleSize = 1; // Minimum particle size
  
  // Default particle properties
  let particleColor = '#EB0029';
  let particleSpacing = 1.4;
  let mouseRadius = 70;

  const mouse = {
      x: null,
      y: null,
      radius: mouseRadius
  };

  window.addEventListener('mousemove', function(event) {
      mouse.x = event.x;
      mouse.y = event.y;
  });

  class Particle {
      constructor(x, y) {
          this.x = Math.random() * canvas.width; // Random initial x position
          this.y = Math.random() * canvas.height; // Random initial y position
          this.size = particleSize;
          this.color = particleColor;
          this.baseX = x;
          this.baseY = y;
          this.density = (Math.random() * 30) + 1;
      }
      draw() {
          ctx.fillStyle = this.color;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.closePath();
          ctx.fill();
      }
      update() {
          let dx = mouse.x - this.x;
          let dy = mouse.y - this.y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          let forceDirectionX = dx / distance;
          let forceDirectionY = dy / distance;
          let maxDistance = mouse.radius;
          let force = (maxDistance - distance) / maxDistance;
          let directionX = (forceDirectionX * force * this.density);
          let directionY = (forceDirectionY * force * this.density);

          if (distance < mouse.radius) {
              this.x -= directionX;
              this.y -= directionY;
          } else {
              if (this.x !== this.baseX) {
                  let dx = this.x - this.baseX;
                  this.x -= dx / 10;
              }
              if (this.y !== this.baseY) {
                  let dy = this.y - this.baseY;
                  this.y -= dy / 10;
              }
          }
      }
  }

  function calculateFPS(currentTime) {
      const deltaTime = currentTime - lastTime;
      fps = 1000 / deltaTime;
      lastTime = currentTime;
  }

  function adjustParticleCountAndSize() {
      // Adjust number of particles and size based on current FPS
      if (fps < minFps) {
          // Reduce particles and increase size
          numberOfParticles = Math.max(minParticles, Math.floor(maxParticles * (fps / minFps)));
          particleSize = Math.min(maxParticleSize, particleSize + 0.1);  // Increase size slightly
      } else {
          // Use more particles and smaller size
          numberOfParticles = maxParticles;
          particleSize = Math.max(minParticleSize, particleSize - 0.1); // Decrease size slightly
      }
  }

  // Load configuration from config.json
  async function loadConfig() {
      const response = await fetch('/assets/logoscript.json');
      const config = await response.json();
      particleColor = config.particleColor || particleColor;
      particleSize = config.particleSize || particleSize;
      particleSpacing = config.particleSpacing || particleSpacing;
      mouseRadius = config.mouseRadius || mouseRadius;
  }

  async function loadSVG(url) {
      const response = await fetch(url);
      const text = await response.text();
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(text, "image/svg+xml");
      const paths = xmlDoc.getElementsByTagName("path");
      return Array.from(paths).map(path => path.getAttribute("d"));
  }

  function getParticlePositionsFromPathData(pathData) {
      const positions = [];
      const path = new Path2D(pathData);
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
      let minX = canvasWidth, maxX = 0, minY = canvasHeight, maxY = 0;
      for (let y = 0; y < canvasHeight; y += particleSpacing) { 
          for (let x = 0; x < canvasWidth; x += particleSpacing) { 
              if (ctx.isPointInPath(path, x, y)) {
                  positions.push({ x, y });
                  if (x < minX) minX = x;
                  if (x > maxX) maxX = x;
                  if (y < minY) minY = y;
                  if (y > maxY) maxY = y;
              }
          }
      }

      return { positions, minX, maxX, minY, maxY };
  }

  async function init() {
      await loadConfig();  // Wait for the config to load before continuing
      particlesArray = [];
      const svgPaths = await loadSVG('/assets/logo.svg');
      
      let allPositions = [];
      let minX = canvas.width, maxX = 0, minY = canvas.height, maxY = 0;

      svgPaths.forEach(pathData => {
          const { positions, minX: pathMinX, maxX: pathMaxX, minY: pathMinY, maxY: pathMaxY } = getParticlePositionsFromPathData(pathData);
          allPositions = allPositions.concat(positions);
          if (pathMinX < minX) minX = pathMinX;
          if (pathMaxX > maxX) maxX = pathMaxX;
          if (pathMinY < minY) minY = pathMinY;
          if (pathMaxY > maxY) maxY = pathMaxY;
      });

      const offsetX = (canvas.width - (maxX - minX)) / 2 - minX;
      const offsetY = (canvas.height - (maxY - minY)) / 2 - minY;

      allPositions = allPositions.map(pos => ({ x: pos.x + offsetX, y: pos.y + offsetY }));

      allPositions.forEach(pos => {
          particlesArray.push(new Particle(pos.x, pos.y));
      });
  }

  function animate(currentTime) {
      // Calculate FPS
      calculateFPS(currentTime);
      
      // Adjust particle count and size based on FPS
      adjustParticleCountAndSize();

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Redraw particles based on updated particle count and size
      for (let i = 0; i < particlesArray.length; i++) {
          particlesArray[i].size = particleSize;  // Update particle size
          particlesArray[i].draw();
          particlesArray[i].update();
      }
      
      // Keep animation going
      requestAnimationFrame(animate);
  }

  init();
  animate(0);

  window.addEventListener('resize', function() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
  });
};