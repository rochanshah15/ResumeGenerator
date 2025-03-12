// Function to toggle dark mode
function toggleDarkMode() {
    const body = document.body;
    const darkModeToggle = document.getElementById('darkModeToggle');

    // Toggle dark mode class on body
    body.classList.toggle('dark-mode');

    // Update button text based on dark mode state
    if (body.classList.contains('dark-mode')) {
        darkModeToggle.innerHTML = '<b>☀️ Light</b>';
        localStorage.setItem('darkMode', 'enabled');
    } else {
        darkModeToggle.innerHTML = '<b>🌙 Dark</b>';
        localStorage.setItem('darkMode', 'disabled');
    }
}

// Function to check and apply dark mode preference from localStorage
function applyDarkModePreference() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const darkMode = localStorage.getItem('darkMode');

    if (darkMode === 'enabled') {
        document.body.classList.add('dark-mode');
        darkModeToggle.innerHTML = '<b>☀️ Light</b>';
    } else {
        document.body.classList.remove('dark-mode');
        darkModeToggle.innerHTML = '<b>🌙 Dark</b>';
    }
}

// Event listener for dark mode toggle button
document.getElementById('darkModeToggle').addEventListener('click', toggleDarkMode);

// Apply dark mode preference on page load
window.addEventListener('load', applyDarkModePreference);