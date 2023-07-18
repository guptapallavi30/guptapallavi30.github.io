/* DOMContentLoaded: Document Object Model: runs after entire page is loaded. */
document.addEventListener("DOMContentLoaded", function () {
    /* ----------------------------------------------------------------- */
    /* run experience-cover animation once */
    const expObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const squares = entry.target.querySelectorAll('.experience-description-cover');

        squares.forEach(square => {
          if (entry.isIntersecting) {
            console.log("adding animation class");
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
      rootMargin: "0px 0px -95% 0px", // Margin top, right, bottom, left. +val adds to root; -val decreases from root
      // root: null, // Default is the viewport
    };

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
          }
      });
    };

    const observer2 = new IntersectionObserver(handleIntersection, options);

    /* get all queries; iterate to observe each query. */
    document.querySelectorAll(".sections").forEach(section => {
      observer2.observe(section);
    });

    /* ----------------------------------------------------------------- */
    window.onscroll = function(e) {
        // print "false" if direction is down and "true" if up
        console.log(this.oldScroll > this.scrollY);
        const navbar_elem = document.querySelector(".navbar");
        if(this.oldScroll > this.scrollY) { // scrolling down
            console.log("removing");
            navbar_elem.classList.add("show");
        }else { // scrolling down
            console.log("removing");

            navbar_elem.classList.remove("show");
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