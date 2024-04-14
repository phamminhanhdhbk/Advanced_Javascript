const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const bird = {
    x: 100,
    y: canvas.height / 2,
    radius: 20,
    color: 'blue'
};

const bullet = {
    x: 0,
    y: 0,
    radius: 5,
    speed: 5,
    isMoving: false
};

const birdSound = new Audio('bird_sound.mp3');
const shootSound = new Audio('shoot_sound.mp3');

function drawBird() {
    ctx.beginPath();
    ctx.arc(bird.x, bird.y, bird.radius, 0, Math.PI * 2);
    ctx.fillStyle = bird.color;
    ctx.fill();
    ctx.closePath();
}

function drawBullet() {
    if (bullet.isMoving) {
        ctx.beginPath();
        ctx.arc(bullet.x, bullet.y, bullet.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'red';
        ctx.fill();
        ctx.closePath();
    }
}

function moveBullet() {
    if (bullet.isMoving) {
        bullet.x += bullet.speed;
        if (bullet.x > canvas.width) {
            bullet.isMoving = false;
        }
    }
}

function checkCollision() {
    const dx = bird.x - bullet.x;
    const dy = bird.y - bullet.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    if (distance < bird.radius + bullet.radius) {
        birdSound.play();
        resetBird();
        bullet.isMoving = false;
    }
}

function resetBird() {
    bird.x = 100;
    bird.y = Math.random() * canvas.height;
}

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBird();
    drawBullet();
    moveBullet();
    checkCollision();
    requestAnimationFrame(gameLoop);
}

canvas.addEventListener('mousemove', function(event) {
    bird.y = event.clientY;
});

canvas.addEventListener('click', function() {
    bullet.x = 0;
    bullet.y = bird.y;
    bullet.isMoving = true;
    shootSound.play();
});

gameLoop();
