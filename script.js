// Burger menu toggle
const navLinks = document.querySelector('.nav-links');
const burger = document.querySelector('.burger');
const navLines = document.querySelectorAll('.burger div');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('nav-active');
  navLines.forEach(line => line.classList.toggle('toggle'));
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Set animation order for project and skill cards
const projectCards = document.querySelectorAll('.project-card');
const skillCards = document.querySelectorAll('.skill-card');

projectCards.forEach((card, index) => {
  card.style.setProperty('--animation-order', index);
});

skillCards.forEach((card, index) => {
  card.style.setProperty('--animation-order', index);
});