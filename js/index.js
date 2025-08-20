const menuToggle = document.getElementById("menu-toggle");
const closeMenu = document.getElementById("close-menu");
const nav = document.getElementById("nav");
const firstSection = document.getElementById("first");
let isScrolling = false;
const header = document.querySelector("header");
const homeSection = document.querySelector("#home");
const sentence = document.querySelector("first-landing");
const container = document.getElementById("text");

window.addEventListener("scroll", () => {
  const scrollPos = window.scrollY;

  if (scrollPos > homeSection.offsetHeight - 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
window.addEventListener(
  "wheel",
  (e) => {
    const scrollTop = window.scrollY;
    if (scrollTop < firstSection.offsetHeight && !isScrolling) {
      e.preventDefault();
      isScrolling = true;

      if (e.deltaY > 0) {
        const nextSection = firstSection.nextElementSibling;
        nextSection.scrollIntoView({ behavior: "smooth" });
      }

      setTimeout(() => {
        isScrolling = false;
      }, 800);
    }
  },
  { passive: false }
);

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});
closeMenu.addEventListener("click", () => {
  nav.classList.remove("active");
});
document.addEventListener("click", (e) => {
  if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
    nav.classList.remove("active");
  }
});
