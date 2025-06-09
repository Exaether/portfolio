let navBar = document.querySelector("#navBar");
let closeButton = document.querySelector("#navBar-close");
let openButton = document.querySelector("#navBar-open");

closeButton.addEventListener("click", () => {
	navBar.classList.add("hide");
});

openButton.addEventListener("click", () => {
	navBar.classList.remove("hide");
});

var width = $(window).width();
if (width <= 720) {
	$('nav').addClass('hide');
	document.querySelectorAll("nav ul li a").forEach(element => {
		element.addEventListener("click", () => {
			navBar.classList.add("hide");
		});
	});
}

