/**
* Template Name: Arsha - v2.1.0
* Template URL: https://bootstrapmade.com/arsha-free-bootstrap-html-template-corporate/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
!(function($) {
  "use strict";

  // Preloader
  $(window).on('load', function() {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function() {
        $(this).remove();
      });
    }
  });

  // Smooth scroll for the navigation menu and links with .scrollto classes
  var scrolltoOffset = $('#header').outerHeight() - 2;
  $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        e.preventDefault();

        var scrollto = target.offset().top - scrolltoOffset;
        if ($(this).attr("href") == '#header') {
          scrollto = 0;
        }

        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Activate smooth scroll on page load with hash links
  $(document).ready(function() {
    if (window.location.hash) {
      var initial_nav = window.location.hash;
      if ($(initial_nav).length) {
        var scrollto = $(initial_nav).offset().top - scrolltoOffset;
        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');
      }
    }
  });

  // Mobile Navigation
  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      $('.mobile-nav-overly').toggle();
    });

    $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
      e.preventDefault();
      $(this).next().slideToggle(300);
      $(this).parent().toggleClass('active');
    });

    $(document).click(function(e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }

  // Navigation active state on scroll
  var nav_sections = $('section');
  var main_nav = $('.nav-menu, #mobile-nav');

  $(window).on('scroll', function() {
    var cur_pos = $(this).scrollTop() + 200;

    nav_sections.each(function() {
      var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        if (cur_pos <= bottom) {
          main_nav.find('li').removeClass('active');
        }
        main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
      }
      if (cur_pos < 300) {
        $(".nav-menu ul:first li:first").addClass('active');
      }
    });
  });

  // Toggle .header-scrolled class to #header when page is scrolled
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });

  if ($(window).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
  }

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  // Skills section
  $('.skills-content').waypoint(function() {
    $('.progress .progress-bar').each(function() {
      $(this).css("width", $(this).attr("aria-valuenow") + '%');
    });
  }, {
    offset: '80%'
  });

  // Porfolio isotope and filter
  $(window).on('load', function() {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item'
    });

    $('#portfolio-flters li').on('click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
      aos_init();
    });

    // Initiate venobox (lightbox feature used in portofilo)
    $(document).ready(function() {
      $('.venobox').venobox({
        'share': false
      });
    });
  });

  // Portfolio details carousel
  $(".portfolio-details-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });

  // Init AOS
  function aos_init() {
    AOS.init({
      duration: 1000,
      once: true
    });
  }
  $(window).on('load', function() {
    aos_init();
  });

})(jQuery);

// Grant Nav



// Event Calender

document.addEventListener('DOMContentLoaded', function() {
  let events = [
    {
      date: '2024-09-25',
      title: 'The Alignment of LLMs Through the Lens of Data and Algorithms - Resource Person Prof. Radha Poovendran',
      image: 'assets/img/events/sep25.jpg'
   },
   {
    date: '2024-12-07',
    title: 'TinyML in Action',
    image: 'assets/img/events/Workshop2.png'
    },
    {
      date: '2024-12-08',
      title: 'Exploring Spiking Neural Networks',
      image: 'assets/img/events/Workshop1.png'
      },
   {
    date: '2024-12-11',
    title: 'Unleashing the Power of Generative AI in Research',
    image: 'assets/img/events/workshop3.png'
    },
    {
      date: '2024-12-12',
      title: 'ICAC 2024 Conference - Day 1',
      url: 'https://icac.lk/' // Link for ICAC 2024 Conference
   },
   {
      date: '2024-12-13',
      title: 'ICAC 2024 Conference - Day 2',
      url: 'https://icac.lk/' // Link for ICAC 2024 Conference
   }
      
  ];

  const now = new Date();
  let currentMonth = now.getMonth();
  let currentYear = now.getFullYear();

  const monthDisplay = document.querySelector('.month-display');
  const calendarBody = document.querySelector('.calendar-body');
  const prevMonthButton = document.querySelector('.previous-month');
  const nextMonthButton = document.querySelector('.next-month');

  function loadMonth(month, year) {
    const firstDay = new Date(year, month).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Corrected month display
    monthDisplay.textContent = new Date(year, month).toLocaleString('default', { month: 'long', year: 'numeric' });
    calendarBody.innerHTML = '';

    let date = 1;
    for (let row = 0; row < 6; row++) {
        const tr = document.createElement('tr');
        let hasDates = false; // Flag to check if this row contains any dates

        for (let col = 0; col < 7; col++) {
            const td = document.createElement('td');
            if (row === 0 && col < firstDay || date > daysInMonth) {
                td.textContent = '';
            } else {
                td.textContent = date;
                const eventDay = `${year}-${String(month + 1).padStart(2, '0')}-${String(date).padStart(2, '0')}`;
                const eventForDay = events.find(e => e.date === eventDay);
                if (eventForDay) {
                  const eventElement = document.createElement('span');
                  eventElement.textContent = eventForDay.title;
                  eventElement.classList.add('event-link');
                  eventElement.style.textDecoration = 'none';
                  eventElement.style.color = '#fff';
                  eventElement.style.display = 'inline-block';
                  eventElement.style.padding = '2px 6px';
                  eventElement.style.backgroundColor = '#28a745';
                  eventElement.style.borderRadius = '4px';
                  eventElement.style.marginTop = '4px';
                  eventElement.style.fontSize = '0.85em';
                  eventElement.style.cursor = 'pointer';
              
                  if (eventForDay.image) {
                      // Show image preview on click
                      eventElement.addEventListener('click', () => showImage(eventForDay.image));
                  } else if (eventForDay.url) {
                      // Open link on click
                      eventElement.addEventListener('click', () => {
                          window.open(eventForDay.url, '_blank'); // Open the link in a new tab
                      });
                  }
              
                  td.appendChild(document.createElement('br')); // Add space between date and event
                  td.appendChild(eventElement);
              }
                date++;
                hasDates = true; // Mark this row as having at least one date
            }
            tr.appendChild(td);
        }

        if (hasDates) {
            calendarBody.appendChild(tr); // Only append rows that contain dates
        }
    }
  }

  function showImage(imageSrc) {
    let modal = document.getElementById('image-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'image-modal';
        modal.style.position = 'fixed';
        modal.style.left = '0';
        modal.style.top = '0';
        modal.style.width = '100%';
        modal.style.height = '100%';
        modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        modal.style.display = 'flex';
        modal.style.justifyContent = 'center';
        modal.style.alignItems = 'center';
        modal.style.zIndex = '1000';

        const img = document.createElement('img');
        img.id = 'modal-image';
        img.style.maxWidth = '90%';
        img.style.maxHeight = '90%';
        modal.appendChild(img);

        modal.addEventListener('click', function() {
            modal.style.display = 'none';
        });

        document.body.appendChild(modal);
    }

    const img = document.getElementById('modal-image');
    img.src = imageSrc;
    modal.style.display = 'flex';
}

  loadMonth(currentMonth, currentYear);

  prevMonthButton.addEventListener('click', () => {
      currentMonth--;
      if (currentMonth < 0) {
          currentMonth = 11;
          currentYear--;
      }
      loadMonth(currentMonth, currentYear);
  });

  nextMonthButton.addEventListener('click', () => {
      currentMonth++;
      if (currentMonth > 11) {
          currentMonth = 0;
          currentYear++;
      }
      loadMonth(currentMonth, currentYear);
  });
});

// End  Event Calender