/* DOMContentLoaded: Document Object Model: runs after entire page is loaded. */
document.addEventListener("DOMContentLoaded", function () {
    /* ----------------------------------------------------------------- */
    /* run experience-cover animation once */
    const expObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const squares = entry.target.querySelectorAll('.experience-description-cover');

        squares.forEach(square => {
          if (entry.isIntersecting) {
            square.classList.add('run-experience-description-cover');
            expObserver.unobserve(entry.target);
          }
        });
      });
    });
    /* get single query with class '.experience-wrapper' */
    expObserver.observe(document.querySelector('.experience-wrapper'));
    
    /* ----------------------------------------------------------------- */

    /* initial orienting project panel's icons based on window size */
    if ($(window).width() <= 600) {
      $('.project-info-circle').addClass('move_vertically');
    } else {
      $('.project-info-circle').removeClass('move_vertically');
    }

    /* ----------------------------------------------------------------- */
    /* set navbar color too contrast background */
    const options = {
      threshold: 0, // what % of ENTRY ELEM needs to be on screen to count as intersecting
      rootMargin: "-4.95% 0px -95% 0px", // Margin top, right, bottom, left. +val adds to root; -val decreases from root
      // root: null, // Default is the viewport
    };
    const firstEntryId = document.querySelector("section").id;
    const handleIntersection = (entries, observer2) => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          // set navbar-text color to contrast color
            const navbarText = document.querySelectorAll(".nav-text");
            navbarText.forEach(txt => {
              if(entry.target.classList.contains("background-color-2")){
                txt.classList.add("light");
              }else {
                txt.classList.remove("light");
              }
            }); 
            
            console.log(entry);
            /* if entry is first-child, prevent hiding navbar */
            if(entry.target.id === firstEntryId) {
              canHideNavbar = false;
            }else {
              canHideNavbar = true;
            }
            console.log("canHideNavbar: " + canHideNavbar);
          }
      });
    };

    const observer2 = new IntersectionObserver(handleIntersection, options);

    /* get all queries; iterate to observe each query. */
    document.querySelectorAll("section").forEach(section => {
      observer2.observe(section);
    });

    /* ----------------------------------------------------------------- */
    let canHideNavbar = false;
    /* hide navbar on scroll down, reappear on scroll up */
    window.onscroll = function(e) {
        const navbar_items = document.querySelector(".navbar-nav");
        
        if(this.oldScroll > this.scrollY) { // scrolling up
          navbar_items.classList.add("show");

        }else { // scrolling down
          /* prevents hiding navbar on first section */
          if(canHideNavbar) {
            const button = document.querySelector('.navbar-toggler');
    
            // Check if the button is currently visible
            const isVisible = !!(button.offsetWidth || button.offsetHeight || button.getClientRects().length);
    
            if (!isVisible) { // button not visible, hide elems
              // navbar_items.classList.remove("show");
            }
          }
        }
        // updating scroll val
        this.oldScroll = this.scrollY;
    }
});

/* ----------------------------------------------------------------- */
  /* re-orienting project panel's icons based on window size */
  $(window).on('resize', function() {
    if ($(window).width() <= 600) {
      $('.project-info-circle').addClass('move_vertically');
      $('.rolling-img').addClass('move_vertically');
    } else {
      $('.project-info-circle').removeClass('move_vertically');
      $('.rolling-img').removeClass('move_vertically');
    }
  });