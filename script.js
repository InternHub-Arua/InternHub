// Add a click event listener to the menu icon
const menuIcon = document.querySelector('.menu-icon');
const menuLinks = document.querySelector('.menu-links');
menuIcon.addEventListener('click', () => {
  menuLinks.classList.toggle('show');
});

//This code listens for changes in the search input field, and filters the list of internships by their name based on the user's input.
const internships = document.querySelectorAll('.internship');
const searchInput = document.querySelector('#search');

searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();

  internships.forEach(internship => {
    const name = internship.dataset.name.toLowerCase();
    if (name.includes(query)) {
      internship.style.display = 'block';
    } else {
      internship.style.display = 'none';
    }
  });
});
