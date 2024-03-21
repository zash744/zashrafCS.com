// dark-mode.js

// Check if user's preference is stored in local storage
var isDarkMode = localStorage.getItem("darkMode") === "true";

// Function to toggle dark mode
function toggleDarkMode() {
  isDarkMode = !isDarkMode;
  document.body.classList.toggle("dark-mode", isDarkMode);
  localStorage.setItem("darkMode", isDarkMode);
}

// Apply dark mode on initial load
document.body.classList.toggle("dark-mode", isDarkMode);
