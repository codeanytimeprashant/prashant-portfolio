const textList = [
  "Frontend Developer",
  "Python Programmer",
  "Tech Enthusiast",
  "I build clean, responsive websites.",
  "I design interactive user interfaces.",
  "I love turning ideas into code.",
  "Let's create something awesome!"
];

let index = 0;
const typingElement = document.getElementById("typing");

function showNextText() {
  if (!typingElement) return;

  typingElement.classList.remove("fade-in");
  void typingElement.offsetWidth;
  typingElement.textContent = textList[index];
  typingElement.classList.add("fade-in");

  index = (index + 1) % textList.length;
  setTimeout(showNextText, 2500);
}

document.addEventListener("DOMContentLoaded", () => {
  showNextText();
});

// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

if (mobileMenu && navLinks) {
  mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  // Close menu when a link is clicked
  const navItems = navLinks.querySelectorAll('a');
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });
}
