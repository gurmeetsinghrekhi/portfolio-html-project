const sections = document.querySelectorAll("section[id]");
const links = document.querySelectorAll("nav a");
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add("show");
}
});
},{threshold:.12});

reveals.forEach(item => observer.observe(item));

function updateNav() {
let current = "";

sections.forEach(section => {
if (window.scrollY >= section.offsetTop - 170) {
current = section.id;
}
});

links.forEach(link => {
link.classList.toggle(
"active",
link.getAttribute("href") === "#" + current
);
});
}

window.addEventListener("scroll",updateNav);
updateNav();