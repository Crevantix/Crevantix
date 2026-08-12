const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector("#nav");
menu?.addEventListener("click", () => nav.classList.toggle("open"));
document.querySelectorAll(".nav a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

const sections = [...document.querySelectorAll("main section[id]")];
const links = [...document.querySelectorAll(".nav a")];
const setActive = () => {
  const y = window.scrollY + 140;
  let current = "home";
  sections.forEach(s => { if (y >= s.offsetTop) current = s.id; });
  links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + current));
};
window.addEventListener("scroll", setActive, {passive:true});
setActive();

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add("visible"); });
}, {threshold:.12});
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", e => {
    const id = a.getAttribute("href");
    if (id && id !== "#") {
      const target = document.querySelector(id);
      if (target) { e.preventDefault(); target.scrollIntoView({behavior:"smooth", block:"start"}); }
    }
  });
});
