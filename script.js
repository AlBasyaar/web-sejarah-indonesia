// Smooth Scroll for Links
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  // Typing effect for hero section
  const texts = ["Menelusuri Jejak Sejarah dan Dampaknya", "Pengaruh Kolonialisme di Nusantara", "Jejak Diplomasi dan Perdagangan"];
  let textIndex = 0;
  let charIndex = 0;
  const typingSpeed = 100;
  const delayBetweenTexts = 1500; // delay between text changes
  const typedText = document.getElementById('typed-text');
  
  function typeText() {
    if (charIndex < texts[textIndex].length) {
      typedText.textContent += texts[textIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeText, typingSpeed);
    } else {
      setTimeout(deleteText, delayBetweenTexts); // delay before deleting text
    }
  }

  function deleteText() {
    if (charIndex > 0) {
      typedText.textContent = texts[textIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(deleteText, typingSpeed);
    } else {
      textIndex = (textIndex + 1) % texts.length; // move to the next text
      setTimeout(typeText, typingSpeed);
    }
  }

  // Start the typing effect
  typeText();

  // Toggle mobile menu
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', function() {
    navLinks.classList.toggle('show');
  });

  // Scroll reveal animations
  const faders = document.querySelectorAll('.fadeIn');
  const appearOptions = {
    threshold: 0.2
  };

  const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add('appear');
        appearOnScroll.unobserve(entry.target);
      }
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
});
