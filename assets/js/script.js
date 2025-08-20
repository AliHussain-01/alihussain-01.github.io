/* License:
 * - Code: MIT Licensed (free to copy & adapt).
 * - Personal Content (text, images, identity): All Rights Reserved.
 * 
 * © 2025 Ali Hussain. 
 * GitHub: AliHussain-01 | Contact: [YourEmail] for permissions.
*/ 
 
// Get the toggle button
const themeToggle = document.getElementById('theme-toggle');

// Load saved theme from localStorage
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
  document.body.classList.add('dark-mode');
} else if (savedTheme === 'light') {
  document.body.classList.remove('dark-mode');
}

// Optional: Use system preference if no saved theme
if (!savedTheme) {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark-mode');
  }
}

// Add click listener to toggle dark mode
themeToggle?.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  // Save the user's preference
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});
