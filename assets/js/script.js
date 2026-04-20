'use strict';


// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });




// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}





// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}

const form1 = document.getElementById("contactForm");

form1.addEventListener("submit", function (e) {
  e.preventDefault();

  const fullName = document.getElementById("fullname").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const to = "cy948039527@gmail.com";
  const subject = `Thru Joy Chen's website message from ${fullName}`;
  const body =
    `Hi Joy,


  ${message}

  
${fullName}
Email: ${email}`;
  const mailtoLink =
    `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  window.location.href = mailtoLink;
});



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}

//加的部分
// Service item modal functionality
const serviceButtons = document.querySelectorAll(".service-icon-box button");
const modals = document.querySelectorAll(".modal");

// Open modal when service icon is clicked
serviceButtons.forEach((button, index) => {
  button.addEventListener("click", function () {
    const modalId = `service-modal-${index + 1}`;
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add("open");
    }
  });
});

// Close modal when close button is clicked
modals.forEach((modal) => {
  const closeBtn = modal.querySelector(".close");
  if (closeBtn) {
    closeBtn.addEventListener("click", function () {
      modal.classList.remove("open");
    });
  }
});

// Close modal when clicking outside the modal content
modals.forEach((modal) => {
  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.classList.remove("open");
    }
  });
});

// Close modal on Escape key
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    modals.forEach((modal) => {
      modal.classList.remove("open");
    });
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.slider-dots .dot');
  const prevBtn = document.querySelector('.slider-btn.prev');
  const nextBtn = document.querySelector('.slider-btn.next');

  let currentSlide = 0;
  const totalSlides = slides.length;

  // Show specific slide
  function showSlide(n) {
    // Remove active class from all slides and dots
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    // Handle slide index wrapping
    if (n >= totalSlides) {
      currentSlide = 0;
    } else if (n < 0) {
      currentSlide = totalSlides - 1;
    } else {
      currentSlide = n;
    }

    // Add active class to current slide and dot
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
  }

  // Next slide
  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  // Previous slide
  function prevSlide() {
    showSlide(currentSlide - 1);
  }

  // Event listeners for buttons
  nextBtn.addEventListener('click', nextSlide);
  prevBtn.addEventListener('click', prevSlide);

  // Event listeners for dots
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      showSlide(index);
    });
  });

  // Auto play (optional - every 6 seconds)
  let autoPlayInterval = setInterval(nextSlide, 6000);

  // Pause auto play on hover
  const sliderWrapper = document.querySelector('.slider-wrapper');
  sliderWrapper.addEventListener('mouseenter', () => {
    clearInterval(autoPlayInterval);
  });

  sliderWrapper.addEventListener('mouseleave', () => {
    autoPlayInterval = setInterval(nextSlide, 5000);
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') prevSlide();
    if (e.key === 'ArrowRight') nextSlide();
  });
});

// Projects slider
const projectSlides = document.querySelectorAll('.project-slide');
const projectDots = document.querySelectorAll('.project-dots .dot');
const projectPrev = document.querySelector('.project-nav.prev');
const projectNext = document.querySelector('.project-nav.next');
let currentProject = 0;

function showProject(n) {
  projectSlides.forEach(s => s.classList.remove('active'));
  projectDots.forEach(d => d.classList.remove('active'));

  projectSlides[n].classList.add('active');
  projectDots[n].classList.add('active');
}

projectNext.addEventListener('click', () => {
  currentProject = (currentProject + 1) % projectSlides.length;
  showProject(currentProject);
});

projectPrev.addEventListener('click', () => {
  currentProject = (currentProject - 1 + projectSlides.length) % projectSlides.length;
  showProject(currentProject);
});

projectDots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    currentProject = i;
    showProject(currentProject);
  });
});

let isFirst = true;

function toggleAvatar() {
  const avatar = document.getElementById("avatar");

  if (isFirst) {
    avatar.src = "./assets/images/my-avatar-2.jpg";
  } else {
    avatar.src = "./assets/images/my-avatar.jpg";
  }

  isFirst = !isFirst;
}