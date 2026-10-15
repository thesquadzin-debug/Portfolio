// Portfolio interactions: mobile menu, active navigation, and email-based contact form.
const menuToggle = document.querySelector("#menuToggle");
const nav = document.querySelector("#nav");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

const sections = [...document.querySelectorAll("main section[id]")];
const navLinks = [...document.querySelectorAll(".nav a[href^='#']")];

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
        });
      }
    });
  }, { rootMargin: "-35% 0px -55% 0px" });
  sections.forEach((section) => observer.observe(section));
}

const contactForm = document.querySelector("#contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const message = document.querySelector("#message").value.trim();
    const recipient = "your.email@example.com"; // Replace with your real email.
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`Hi Avil,\n\n${message}\n\nFrom: ${name}\nEmail: ${email}`);
    const note = document.querySelector("#formNote");

    if (recipient === "your.email@example.com") {
      note.textContent = "Before using this form, replace your.email@example.com in js/main.js with your real email address.";
    } else {
      note.textContent = "Opening your email app…";
    }
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  });
}
