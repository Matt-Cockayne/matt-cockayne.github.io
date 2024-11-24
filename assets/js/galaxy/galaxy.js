// Get the galaxy container and glowing core
const container = document.getElementById('galaxy-container');
const glowingCore = document.getElementById('glowing-core');

// Number of particles in the galaxy
const numParticles = 500;
const particles = [];

// Helper function for smooth interpolation (Lerp)
function lerp(start, end, t) {
    return start + t * (end - start);
}

// Create particles only once outside the animation loop
function createParticles() {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Get the glowing core's initial position
    const centralStarX = viewportWidth / 2;
    const centralStarY = viewportHeight / 2;

    for (let i = 0; i < numParticles; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random size for particles
        const size = Math.random() * 5 + 3;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Random particle colors (deep blues and whites)
        const colors = ['#ffffff', '#B0E0E6', '#4682B4', '#ADD8E6']; // Light blue, steel blue, light cyan
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

        // Random position in a circular area centered around the glowing core
        const angle = Math.random() * Math.PI * 2;
        const radius = Math.random() * 300 + 50; // Random distance from the center
        const x = Math.cos(angle) * radius + centralStarX;
        const y = Math.sin(angle) * radius + centralStarY;

        particle.style.position = 'absolute';
        
        // Parallax effect: deeper particles appear smaller
        const depth = Math.random() * 3 + 1; // Depth factor
        particle.style.zIndex = Math.floor(10 - depth);

        // Add a gradient for the mask-like glow
        const particleGradient = document.createElement('div');
        particleGradient.classList.add('particle-gradient');
        particleGradient.style.width = '100%';
        particleGradient.style.height = '100%';
        particle.appendChild(particleGradient);

        // Append particle to the container
        container.appendChild(particle);

        particles.push({
            element: particle,
            gradient: particleGradient,
            angle,
            radius,
            depth,  // Store depth for the scale factor
            speed: Math.random() * 0.01 + 0.01, // Speed of movement
            flickerSpeed: Math.random() * 0.5 + 0.5, // Flicker speed
        });
    }
}

// Animate particles
function animate() {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Get the current position of the glowing core
    const coreRect = glowingCore.getBoundingClientRect();
    const centralStarX = coreRect.left + coreRect.width / 2;
    const centralStarY = coreRect.top + coreRect.height / 2;

    particles.forEach(particle => {
        // Increment the particle's angle based on its speed
        particle.angle += particle.speed;

        // Calculate the new position in the center coordinates
        const x = Math.cos(particle.angle) * particle.radius + centralStarX;
        const y = Math.sin(particle.angle) * particle.radius + centralStarY;

        // Update position and apply scaling based on depth
        // Use the core's center as the reference point (remove the viewport centering logic)
        particle.element.style.transform = `translate(${x - particle.element.offsetWidth / 2}px, ${y - particle.element.offsetHeight / 2}px) scale(${1 / particle.depth})`;

        // Dynamic opacity flickering
        const flicker = Math.abs(Math.sin(performance.now() / 1000 * particle.flickerSpeed));
        particle.gradient.style.opacity = 0.3 + flicker * 0.7;
    });

    // Continue the animation loop
    requestAnimationFrame(animate);
}

// Initialize particles once
createParticles();

// Start the animation loop
animate();