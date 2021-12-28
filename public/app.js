"use strict";

// Hamburger Menu......
const hamMenuBtn = document.getElementById("nav-toggler");
const hamNav = document.getElementById("mobile-nav");
const allAnchor = document.querySelectorAll("footer a");

hamMenuBtn.addEventListener("click", () => {
	hamNav.classList.toggle("opacity-100");
	hamNav.classList.toggle("scale-100");
});

// FAQ Accordion........
const accordionBtn = document.querySelectorAll(".question-btn");

accordionBtn.forEach((el) => {
	el.addEventListener("click", () => {
		el.classList.toggle("arrow-rotate");
		el.nextElementSibling.classList.toggle("show-answer");
	});
});

// Stopping anchor links.....
allAnchor.forEach((element) => {
	console.log(element);
	element.addEventListener("click", (e) => e.preventDefault());
});
