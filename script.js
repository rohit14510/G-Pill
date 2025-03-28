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
