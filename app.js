// Add these functions to the existing app.js

// Create shooting stars
for (let i = 0; i < 5; i++) {
  createShootingStar();
}

function createShootingStar() {
  const shootingStar = document.createElement('div');
  shootingStar.classList.add('shooting-star');
  shootingStar.style.left = `${Math.random() * window.innerWidth}px`;
  shootingStar.style.top = `${Math.random() * window.innerHeight}px`;
  document.querySelector('.shooting-stars').appendChild(shootingStar);
}

// Create hearts
for (let i = 0; i < 5; i++) {
  createHeart();
}

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = `${Math.random() * window.innerWidth}px`;
  heart.style.top = `${Math.random() * window.innerHeight}px`;
  document.querySelector('.heart-container').appendChild(heart);
}
