// ===== Mobile menu: open/close when the ☰ button is clicked =====
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", isOpen);
});

// Close the menu after choosing a section
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", false);
  });
});

// ===== Highlight the nav link of the section on screen =====
const sections = document.querySelectorAll("main section[id]");

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.querySelectorAll("a").forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    });
  },
  { rootMargin: "-50% 0px -50% 0px" } // "on screen" = crosses the middle of the viewport
);

sections.forEach((section) => navObserver.observe(section));

// ===== Fade sections in as you scroll =====
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target); // animate only once
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".section").forEach((section) => {
  section.classList.add("reveal");
  revealObserver.observe(section);
});

// ===== Footer year updates automatically =====
document.getElementById("year").textContent = new Date().getFullYear();
