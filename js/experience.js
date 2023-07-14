
  document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const squares = entry.target.querySelectorAll('.experience-description-cover');

        squares.forEach(square => {
          if (entry.isIntersecting) {
            console.log("adding animation class");
            square.classList.add('run-experience-description-cover');
          } else {
            // We're not intersecting, so remove the class!
            square.classList.remove('run-experience-description-cover');
          }
        });
      });
    });

    observer.observe(document.querySelector('.experience-wrapper'));
  });