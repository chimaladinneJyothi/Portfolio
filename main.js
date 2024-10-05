/* ----- NAVIGATION BAR FUNCTION ----- */
// Add shadow to navigation bar on scroll
window.addEventListener("scroll", function() {
  const nav = document.getElementById("header");
  if (window.scrollY > 0) {
      nav.classList.add("shadow");
  } else {
      nav.classList.remove("shadow");
  }
});

// Typing effect for your name
document.addEventListener("DOMContentLoaded", function() {
  const typedTextElement = document.querySelector(".typedText");
  const phrases = ["a Java Developer",  "an IT Professional"];
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
      if (isDeleting) {
          // Erasing
          if (charIndex > 0) {
              charIndex--;
              typedTextElement.textContent = phrases[phraseIndex].substring(0, charIndex);
              setTimeout(type, 100); // Adjust erasing speed
          } else {
              isDeleting = false; // Switch to typing mode
              phraseIndex = (phraseIndex + 1) % phrases.length; // Cycle through phrases
              setTimeout(type, 500); // Wait before typing the next phrase
          }
      } else {
          // Typing
          if (charIndex < phrases[phraseIndex].length) {
              typedTextElement.textContent = phrases[phraseIndex].substring(0, charIndex + 1);
              charIndex++;
              setTimeout(type, 100); // Adjust typing speed
          } else {
              isDeleting = true; // Switch to deleting mode after complete phrase
              setTimeout(type, 1000); // Wait before starting to erase
          }
      }
  }

  type(); // Start the typing effect
});

// Scroll reveal animations
ScrollReveal().reveal('.featured-box', { delay: 200, origin: 'top', distance: '50px' });
ScrollReveal().reveal('.section', { delay: 200, origin: 'bottom', distance: '50px', duration: 600 });
ScrollReveal().reveal('.project-box', { delay: 200, interval: 100, origin: 'left', distance: '50px' });
