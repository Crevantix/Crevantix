
document.addEventListener("DOMContentLoaded", () => {
  const nav = document.getElementById("nav");
  const menuBtn = document.querySelector(".menu-btn");
  const mobileMenu = document.querySelector(".mobile-menu");
  const menuLinks = mobileMenu ? mobileMenu.querySelectorAll("a") : [];

  window.addEventListener("scroll", () => {
    if (nav) nav.classList.toggle("scrolled", window.scrollY > 20);
  });

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      const open = mobileMenu.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    menuLinks.forEach(link => link.addEventListener("click", () => mobileMenu.classList.remove("open")));
  }

  const ring = document.querySelector(".cursor-ring");
  const dot = document.querySelector(".cursor-dot");
  if (ring && dot && window.matchMedia("(pointer:fine)").matches) {
    window.addEventListener("mousemove", e => {
      dot.style.left = e.clientX + "px";
      dot.style.top = e.clientY + "px";
      ring.style.left = e.clientX + "px";
      ring.style.top = e.clientY + "px";
    });
    document.querySelectorAll("a,button").forEach(el => {
      el.addEventListener("mouseenter", () => {
        ring.style.width = "52px";
        ring.style.height = "52px";
      });
      el.addEventListener("mouseleave", () => {
        ring.style.width = "34px";
        ring.style.height = "34px";
      });
    });
  }

  document.querySelectorAll(".magnetic").forEach(el => {
    el.addEventListener("mousemove", e => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2;
      const y = e.clientY - r.top - r.height / 2;
      el.style.transform = `translate(${x * .08}px, ${y * .08}px)`;
    });
    el.addEventListener("mouseleave", () => el.style.transform = "");
  });

  const track = document.querySelector(".work-track");
  const controls = document.querySelectorAll(".carousel-controls button");
  if (track && controls.length) {
    controls.forEach(btn => btn.addEventListener("click", () => {
      const card = track.querySelector(".work-card");
      track.scrollBy({ left: (card ? card.offsetWidth + 15 : 300) * Number(btn.dataset.dir), behavior: "smooth" });
    }));
  }

  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");
  if (form && status) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      const data = new FormData(form);
      const message =
        `Hello Crevantix!%0A%0AName: ${data.get("name")}%0ACompany: ${data.get("company")}%0AEmail: ${data.get("email")}%0APhone: ${data.get("phone")}%0AService: ${data.get("service")}%0AProject: ${data.get("details")}`;
      const phone = "919999999999";
      window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
      status.textContent = "Opening WhatsApp…";
    });
  }

  const whatsappUrl = "https://wa.me/919999999999";
  ["waInline","waFloat","waFooter"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.href = whatsappUrl;
  });

  if (window.gsap) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray(".reveal").forEach(el => {
      gsap.from(el, { y: 35, opacity: 0, duration: 1, ease: "power2.out" });
    });
    gsap.utils.toArray(".service-card,.work-card,.step").forEach(el => {
      gsap.from(el, {
        y: 35, opacity: 0, duration: .7, ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 88%" }
      });
    });
  }
});
