// typeing
var typed = new Typed(".typing", {
  strings: ["", "Website Designer", "Web Developer", "Software Developer"],
  typeSpeed: 100,
  loop: true,
});

// Header toggle
let Menubtn= document.getElementById('MenuBtn')
MenuBtn.addEventListener('click', function(e) {
    document.querySelector ('body').classList.toggle('mobile-nav-active');
    this.classList.toggle ('fa-xmark')
})


// Optionally, you can add interactive JavaScript for further animations or effects
document.querySelectorAll('.skill-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
      // Add additional effects if required
      card.style.transform = 'scale(1.05)';
  });

  card.addEventListener('mouseleave', () => {
      // Reset the effects
      card.style.transform = 'scale(1)';
  });
});
// =========================================
// Filter functionality
document.addEventListener('DOMContentLoaded', function () {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projects = document.querySelectorAll('.project-item');

  filterButtons.forEach(button => {
      button.addEventListener('click', function () {
          const filterValue = this.getAttribute('data-filter');

          // Remove 'active' class from all buttons
          filterButtons.forEach(btn => btn.classList.remove('active'));
          // Add 'active' class to clicked button
          this.classList.add('active');

          // Show/Hide projects based on filter
          projects.forEach(project => {
              if (filterValue === 'all' || project.getAttribute('data-category') === filterValue) {
                  project.style.display = 'block'; // Show project
              } else {
                  project.style.display = 'none'; // Hide project
              }
          });
      });
  });
});

