const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuToggle?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const sections = [...document.querySelectorAll("main section[id]")];
const links = [...document.querySelectorAll(".nav a")];

window.addEventListener("scroll", () => {
  let current = "home";
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 160) current = section.id;
  });
  links.forEach(link => link.classList.toggle("active", link.getAttribute("href") === `#${current}`));
}, { passive: true });

document.getElementById("year").textContent = new Date().getFullYear();
