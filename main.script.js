
$(function () {
    // enabling the jquery sticking nav
    $(".sticky-header").sticky();
    AOS.init({
        duration: 600, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false,
    });

    $(document).click(function(e){
        if(e.target.closest('.nav-bar-section'))
        return;
        $('.dropdown-links').removeClass('show');
    });
    $('.about-us-section .buttom-options-container button').on('click', function(){
        const target = $(this).attr('data-target');
        $('.about-us-section .buttom-options-container button').removeClass('active');
        $(this).addClass('active');
        $('.about-us-section .content-container .each-content-section').removeClass('show');
        $('.about-us-section .content-container .each-content-section[id="'+target+'"]').addClass('show');
    });
});

// function openModal() {
//     var modalOverlay = document.getElementById('modalOverlay');
//     var modal = document.querySelector('.modal');
//     modal.style.display = 'flex';
//     modalOverlay.style.display = 'flex';
//     }
    
//     function closeModal() {
//     document.getElementById('modalOverlay').style.display = 'none';
// }

window.addEventListener('scroll', function() {
    var navBarSection = document.querySelector('.nav-bar-section');
    var sticky = navBarSection.offsetTop;

    if (window.pageYOffset > sticky) {
        navBarSection.classList.add('is-sticky');
    } else {
        navBarSection.classList.remove('is-sticky');
    }
});

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        const preloader = document.getElementById("preloader");
        preloader.style.opacity = "0";
        preloader.style.pointerEvents = "none";
        setTimeout(() => {
        preloader.style.display = "none";
        }, 500);
    }, 3000);
}); 


// Disable right-click
  document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
  });

// Disabling key shortcuts
document.addEventListener('keydown', function(e) {
// Keys to block
const forbiddenCombos = [
    (e.ctrlKey && e.key === 'u'),  
    (e.ctrlKey && e.shiftKey && e.key === 'i'), 
    (e.ctrlKey && e.shiftKey && e.key === 'c'), 
    (e.ctrlKey && e.shiftKey && e.key === 'j'), 
    (e.key === 'F12'),
    (e.ctrlKey && e.key === 's')
];

if (forbiddenCombos.some(Boolean)) {
    e.preventDefault();
    e.stopPropagation();
}
});

$(document).ready(function () {
  // Update active link on scroll
  $(window).on('scroll', function () {
    let scrollPos = $(document).scrollTop();

    $('.nav-links-container .link').each(function () {
      let currLink = $(this);
      let sectionID = currLink.attr('href');

      if (sectionID.startsWith("#") && $(sectionID).length) {
        let sectionOffset = $(sectionID).offset().top - 100;
        let sectionHeight = $(sectionID).outerHeight();

        if (scrollPos >= sectionOffset && scrollPos < sectionOffset + sectionHeight) {
          $('.nav-links-container .link').removeClass('active');
          currLink.addClass('active');
        }
      }
    });
  });

  // Optional: set the first link active by default
  $('.nav-links-container .link').removeClass('active');
  $('.nav-links-container ul li').eq(0).find('.link').addClass('active');
});

$(document).ready(function () {
  // Close popup menu when any link inside it is clicked
  $('.popup-menu .link').on('click', function () {
    $('#menu-list').slideUp();
  });

  // Close menu if any .link is clicked anywhere
  $('.link').on('click', function () {
    $('#menu-list').slideUp();
  });

  // hide menu when clicking outside
  $(document).on('click', function (e) {
    if (!$(e.target).closest('#menu-list, .menu-button-container button').length) {
      $('#menu-list').slideUp();
    }
  });

  // Hide on ESC key
  $(document).on('keydown', function(e) {
    if (e.key === "Escape") {
      $('#menu-list').slideUp();
    }
  });
});

