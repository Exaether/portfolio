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

// project 1
open1.addEventListener('click', function (e) {
	projet1.classList.add('show');
});
close1.addEventListener('click', function (e) {
	projet1.classList.remove('show');
});

// project 2
open2.addEventListener('click', function (e) {
	projet2.classList.add('show');
});
close2.addEventListener('click', function (e) {
	projet2.classList.remove('show');
});

// project 3
open3.addEventListener('click', function (e) {
	projet3.classList.add('show');
});
close3.addEventListener('click', function (e) {
	projet3.classList.remove('show');
});

// project 4
open4.addEventListener('click', function (e) {
	projet4.classList.add('show');
});
close4.addEventListener('click', function (e) {
	projet4.classList.remove('show');
});

