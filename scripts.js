// Image carousel
let slideIndex = 1;

function moveSlide(n) {
  showSlide(slideIndex += n);
}

function currentSlide(n) {
  showSlide(slideIndex = n);
}

function showSlide(n) {
  let i;
  const slides = document.querySelectorAll('.carousel-item');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[slideIndex - 1].style.display = 'block';

  const dots = document.querySelectorAll('.dots span');
  for (let i = 0; i < dots.length; i++) {
      dots[i].classList.remove('active');
  }
  dots[slideIndex - 1].classList.add('active');
}

document.addEventListener('DOMContentLoaded', function() {
  // Carousel dots
  const slides = document.querySelectorAll('.carousel-item');
  const dotsContainer = document.querySelector('.dots');
  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement('span');
    dot.addEventListener('click', function() { currentSlide(i + 1); });
    dotsContainer.appendChild(dot);
  }
  showSlide(slideIndex);

  // Start the automatic slide show
  setInterval(function() {
    moveSlide(1);
  }, 10000);
});

function fadeInSlogan(slogans, element) {
  element.textContent = slogans;
  element.classList.add('fade-in');
}

let observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      let target = entry.target;

      // Remove the fade-in class and call the fadeInSlogan function after a delay
      setTimeout(function() {
        target.classList.remove('fade-in'); // Remove the fade-in class
        fadeInSlogan(target.textContent, target);

        // Add the fade-in class back to the target element after another delay
        setTimeout(function() {
          target.classList.add('fade-in');
        }, 2000); // Delay in milliseconds
      }, 2000); // Delay in milliseconds
    }
  });
}, { threshold: 0.5 });

// Start observing an element
document.addEventListener('DOMContentLoaded', function() {
  // Get all elements with the 'slogans' id
  let firstElement = document.querySelector('#slogans');

  // Manually trigger the fade-in effect
  fadeInSlogan(slogans[currentSloganIndex], firstElement);
  currentSloganIndex = (currentSloganIndex + 1) % slogans.length;

  // Start observing the elements
  let elements = document.querySelectorAll('#slogans');
  elements.forEach(function(element) {
    observer.observe(element);
  });
});
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var navbar = document.querySelector(".navbar-container");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
}

// Array of slogans to display. Commented out because I didn't need it. 
// let slogans = ['Bedre bæredygtighed, endnu bedre design', 'Rent design, renere verden', 'Gør fremtiden bæredygtig'];

// Current slogan index
// let currentSloganIndex = 0;

// Typewriter function
// function typeWriter(txt, element) {
//     let i = 0;
//     function type() {
//         if (i < txt.length) {
//             element.innerHTML += txt.charAt(i);
//             i++;
//             setTimeout(type, 75); // adjust speed here
//         }
//     }
//     type();
// }

// Intersection Observer
// let observer = new IntersectionObserver(function(entries) {
//   // If the target element is in view, start the typewriter
//   if (entries[0].isIntersecting) {
//       let target = entries[0].target;
//       // Clear the target element's content before typing the next slogan
//       target.innerHTML = '';
//       typeWriter(slogans[currentSloganIndex], target);
//       currentSloganIndex = (currentSloganIndex + 1) % slogans.length; // Move to the next slogan
//   }
// }, { threshold: 0.5 }); // How much of the target is visible before triggering.