$(document).ready(function() {
    // Toggle class on search icon click
    $('.mobile_search').click(function(event) {
        event.stopPropagation(); // Prevents the click from propagating to the window click event
        $('.header_input-container').toggleClass('active');
    });

    // Toggle class on window click
    $(window).click(function(event) {
        // Check if the click was outside the .header_input-container
        if (!$(event.target).closest('.header_input-container').length) {
            $('.header_input-container').removeClass('active');
        }
    });

    // Prevent clicks inside .header_input-container from closing it
    $('.header_input-container').click(function(event) {
        event.stopPropagation();
    });

    // Toggle class on mobile menu click
    $('.mobile_menu').click(function(event) {
        event.stopPropagation(); // Prevents the click from propagating to the window click event
        $('.mobile-menu').toggleClass('show');
    });

    // Toggle class on window click
    $(window).click(function(event) {
        // Check if the click was outside the .mobile-menu
        if (!$(event.target).closest('.mobile-menu, .mobile_menu').length) {
            $('.mobile-menu').removeClass('show');
        }
    });

    // Prevent clicks inside .mobile-menu from closing it
    $('.mobile-menu').click(function(event) {
        event.stopPropagation();
    });
});


const list = document.querySelectorAll(".nav__item");
list.forEach((item) => {
  item.addEventListener("click", () => {
    list.forEach((item) => item.classList.remove("active"));
    item.classList.add("active");
  });
});


document.addEventListener('DOMContentLoaded', function() {
    const dropdown = document.querySelector('.dropdown');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    // Show the dropdown menu on mouse enter
    dropdown.addEventListener('mouseenter', function() {
        dropdownMenu.style.display = 'block';
    });

    // Hide the dropdown menu on mouse leave
    dropdown.addEventListener('mouseleave', function() {
        dropdownMenu.style.display = 'none';
    });
});
// hero slider
var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 2000, 
    disableOnInteraction: false, 
  },
  loop: true, 
});


//  shop-by-category-slider
var swiper = new Swiper(".shop_by_categories", {
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 3,   /* Mobile */
        spaceBetween: 10
      },
      768: {
        slidesPerView: 5,   /* Tablet */
        spaceBetween: 15
      },
      1024: {
        slidesPerView: 7,   /* Desktop */
        spaceBetween: 20
      }
    }
  });

  // HealthConcern Slider
  var swiper = new Swiper(".HealthConcern", {
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 3,   /* Mobile */
        spaceBetween: 10
      },
      768: {
        slidesPerView: 5,   /* Tablet */
        spaceBetween: 15
      },
      1024: {
        slidesPerView: 7,   /* Desktop */
        spaceBetween: 20
      }
    }
  });
  //Top-Rated-Product
  var swiper = new Swiper(".Top-Rated-Product", {
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,   /* Mobile */
        spaceBetween: 10
      },
      768: {
        slidesPerView: 3,   /* Tablet */
        spaceBetween: 15
      },
      1024: {
        slidesPerView: 4,   /* Desktop */
        spaceBetween: 20
      }
    }
  });
 //Best-Seller-Product
 var swiper = new Swiper(".Best-Seller-Product", {
  slidesPerView: 3,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,   /* Mobile */
      spaceBetween: 10
    },
    768: {
      slidesPerView: 3,   /* Tablet */
      spaceBetween: 15
    },
    1024: {
      slidesPerView: 4,   /* Desktop */
      spaceBetween: 20
    }
  }
});
  //search div 
  // मोबाइल और वेब दोनों के लिए फंक्शन
function handleSearch(inputId, resultId, queryId) {
  const input = document.getElementById(inputId);
  const results = document.getElementById(resultId);
  const query = document.getElementById(queryId);

  input.addEventListener('input', () => {
    const value = input.value.trim();
    if (value !== '') {
      query.textContent = value;
      results.style.display = 'block';
    } else {
      results.style.display = 'none';
    }
  });

  document.addEventListener('click', (e) => {
    if (!input.contains(e.target) && !results.contains(e.target)) {
      results.style.display = 'none';
    }
  });
}

// मोबाइल और वेब सर्च के लिए फंक्शन को कॉल करें
handleSearch('mobile-search', 'mobile-results', 'mobile-query');
handleSearch('web-search', 'web-results', 'web-query');

//login modal
// Login Modal
const loginModal = document.getElementById("loginModal");
const openLoginBtn = document.getElementById("openLogin");
const closeLoginBtn = document.querySelector(".close-login");

// Signup Modal
const signupModal = document.getElementById("signupModal");
const openSignupBtn = document.getElementById("openSignup");
const closeSignupBtn = document.querySelector(".close-signup");

// Switch Buttons
const switchToSignupBtn = document.getElementById("switchToSignup");
const switchToLoginBtn = document.getElementById("switchToLogin");

// Open and Close Login Modal
openLoginBtn.addEventListener("click", () => {
  loginModal.style.display = "flex";
});

closeLoginBtn.addEventListener("click", () => {
  loginModal.style.display = "none";
});

// Open and Close Signup Modal
openSignupBtn.addEventListener("click", () => {
  signupModal.style.display = "flex";
});

closeSignupBtn.addEventListener("click", () => {
  signupModal.style.display = "none";
});

// Switch from Login to Signup
switchToSignupBtn.addEventListener("click", () => {
  loginModal.style.display = "none";
  signupModal.style.display = "flex";
});

// Switch from Signup to Login
switchToLoginBtn.addEventListener("click", () => {
  signupModal.style.display = "none";
  loginModal.style.display = "flex";
});

// Close modal when clicking outside
window.addEventListener("click", (e) => {
  if (e.target === loginModal) {
    loginModal.style.display = "none";
  }
  if (e.target === signupModal) {
    signupModal.style.display = "none";
  }
});

