// Keep content readable without JavaScript and respect reduced-motion preferences.
if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.06 });
  document.documentElement.classList.add("motion-ready");
  document.querySelectorAll(".reveal").forEach((node) => observer.observe(node));
}
