const REVEAL_SELECTOR = "[data-reveal], [data-stagger-group]";

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function activate(root: Element) {
  root.classList.add("is-inview");
  root.querySelectorAll(REVEAL_SELECTOR).forEach((el) => {
    el.classList.add("is-inview");
  });
}

function initReveal() {
  const roots = document.querySelectorAll("[data-reveal-root]");

  if (prefersReducedMotion()) {
    roots.forEach(activate);
    return;
  }

  document.querySelectorAll("[data-reveal-on='load']").forEach(activate);

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        activate(entry.target);
        observer.unobserve(entry.target);
      }
    },
    { threshold: 0.2, rootMargin: "0px 0px -10% 0px" },
  );

  roots.forEach((el) => {
    if (el.hasAttribute("data-reveal-on")) return;
    observer.observe(el);
  });
}

initReveal();
