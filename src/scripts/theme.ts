type Theme = "light" | "dark";

const STORAGE_KEY = "theme";

const currentTheme = (): Theme =>
  document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";

const syncButtons = (theme: Theme) => {
  const next = theme === "dark" ? "light" : "dark";
  document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
    if (!(button instanceof HTMLButtonElement)) return;
    button.setAttribute("aria-checked", String(theme === "light"));
    button.setAttribute("aria-label", `Switch to ${next} mode`);
  });
};

const applyTheme = (theme: Theme) => {
  document.documentElement.setAttribute("data-theme", theme);
  document.documentElement.style.colorScheme = theme;
  localStorage.setItem(STORAGE_KEY, theme);
  syncButtons(theme);
};

document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
  if (!(button instanceof HTMLButtonElement) || button.dataset.bound === "true") return;
  button.dataset.bound = "true";
  button.addEventListener("click", () => {
    applyTheme(currentTheme() === "dark" ? "light" : "dark");
  });
});

syncButtons(currentTheme());
