// Script for the Navbar
const dropdownToggle = document.getElementById("dropdownToggle");
const dropdownMenu = document.getElementById("dropdownMenu");

if (localStorage.getItem('dropdownVisible' === 'true')) {
  dropdownMenu.classList.remove('hidden');
}

// Wait for the document to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', (event) => {
  dropdownToggle.addEventListener('click', function() {
    dropdownMenu.classList.toggle('hidden');
    if (dropdownMenu.classList.contains('hidden')) {
      localStorage.setItem('dropdownVisible', 'false');
    } else {
      localStorage.setItem('dropdownVisible', 'true');
    }
  });
});
