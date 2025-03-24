document.addEventListener("DOMContentLoaded", function () {
  // Register button click event
  document
    .getElementById("register-btn")
    .addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default link behavior
      window.location.href = "https://forms.gle/Tba4Wru8WCxVT91z6"; // Redirect to Google Form
    });

  // Mobile Navigation Toggle
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  hamburger.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Redirect to Google Form when clicking "Register" or "Get Started"
  function redirectToForm(event) {
    event.preventDefault(); // Prevent default link behavior
    window.location.href = "https://forms.gle/Tba4Wru8WCxVT91z6";
  }

  // Attach event listeners
  document
    .getElementById("register-btn")
    .addEventListener("click", redirectToForm);
  document
    .getElementById("get-started-btn")
    .addEventListener("click", redirectToForm);
});

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  hamburger.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });
});

const words = ["Think_", "Code_"];
let index = 0;
let charIndex = 0;
const speed = 150;
const delayBetweenWords = 1200;
const animatedText = document.querySelector(".animated-text");

function typeEffect() {
  if (charIndex < words[index].length) {
    animatedText.textContent += words[index].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, speed);
  } else {
    setTimeout(eraseEffect, delayBetweenWords);
  }
}

function eraseEffect() {
  if (charIndex > 0) {
    animatedText.textContent = words[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, speed / 2);
  } else {
    index = (index + 1) % words.length;
    setTimeout(typeEffect, speed);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(typeEffect, 500);
});

document.addEventListener("DOMContentLoaded", () => {
  const volunteerCards = document.querySelectorAll(".volunteer-card");

  function applyMobileCarousel() {
    if (window.innerWidth <= 768) {
      let currentIndex = 0;

      // Hide all cards except the first one
      volunteerCards.forEach((card, index) => {
        card.style.opacity = index === 0 ? "1" : "0";
        card.style.position = index === 0 ? "relative" : "absolute";
      });

      function showNextCard() {
        // Hide current card
        volunteerCards[currentIndex].style.opacity = "0";
        volunteerCards[currentIndex].style.position = "absolute";

        // Move to the next card (loop back to first if at the end)
        currentIndex = (currentIndex + 1) % volunteerCards.length;

        // Show the new current card
        volunteerCards[currentIndex].style.opacity = "1";
        volunteerCards[currentIndex].style.position = "relative";
      }

      // Change cards every 3 seconds
      setInterval(showNextCard, 3000);
    } else {
      // If on desktop, reset styles to show all cards statically
      volunteerCards.forEach((card) => {
        card.style.opacity = "1";
        card.style.position = "relative";
      });
    }
  }

  // Run the function on load
  applyMobileCarousel();

  // Run again if the screen is resized
  window.addEventListener("resize", applyMobileCarousel);
});




document.querySelectorAll(".faq-question").forEach((button) => {
  button.addEventListener("click", () => {
    const faqItem = button.parentElement;
    faqItem.classList.toggle("active");
  });
});
        // Function to open lightbox
        function openLightbox(imgElement) {
          const lightbox = document.getElementById("lightbox");
          const lightboxImg = document.getElementById("lightbox-img");
          
          lightbox.style.display = "flex";
          lightboxImg.src = imgElement.src;
        }
        
        // Function to close lightbox
        function closeLightbox() {
          document.getElementById("lightbox").style.display = "none";
        }
        
