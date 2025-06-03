const body = document.body;

// light/dark mode
const themeToggle = document.getElementById('themeToggle');

// Check if user preference exists in local storage
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    body.classList.add(currentTheme);
}

themeToggle.addEventListener('click', () => {
	body.classList.toggle('dark-mode');
	// Store user preference in local storage
	if (body.classList.contains('dark-mode')) {
		localStorage.setItem('theme', 'dark-mode');
	} else {
		localStorage.setItem('theme', '');
	}
});
