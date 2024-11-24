// Set up the canvas and its context
const canvas = document.getElementById('galaxyCanvas');
const ctx = canvas.getContext('2d');

// Resize the canvas to fill the screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Parameters for the galaxy
const numStars = 1000;
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const maxRadius = Math.min(canvas.width, canvas.height) / 2;

// Array to hold star objects
let stars = [];

// Star constructor
function Star(x, y, size, speed, angle) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.speed = speed;
    this.angle = angle;
}

// Generate stars
function generateStars() {
    stars = [];
    for (let i = 0; i < numStars; i++) {
        let radius = Math.random() * maxRadius;
        let angle = Math.random() * 2 * Math.PI;
        let x = centerX + radius * Math.cos(angle);
        let y = centerY + radius * Math.sin(angle);
        let size = Math.random() * 2 + 1;
        let speed = Math.random() * 0.005 + 0.002;
        stars.push(new Star(x, y, size, speed, angle));
    }
}

// Function to draw the galaxy background
function drawBackground() {
    // Gradient background for galaxy effect
    let gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, maxRadius);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 0.5)');
    gradient.addColorStop(1, 'rgba(0, 0, 0, 1)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// Function to update and draw stars
function drawStars() {
    ctx.fillStyle = 'white';
    for (let i = 0; i < stars.length; i++) {
        let star = stars[i];
        // Move the stars in a circular motion
        star.angle += star.speed;
        star.x = centerX + Math.cos(star.angle) * (Math.random() * maxRadius);
        star.y = centerY + Math.sin(star.angle) * (Math.random() * maxRadius);

        // Draw the star
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, 2 * Math.PI);
        ctx.fill();
    }
}

// Animation loop
function animate() {
    drawBackground();
    drawStars();
    requestAnimationFrame(animate);
}

// Initialize and start animation
generateStars();
animate();