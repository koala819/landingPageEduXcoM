// Constante pour le media query de préférence de thème sombre
const DARK_SCHEME_QUERY = "(prefers-color-scheme: dark)";

// Fonction pour détecter si le thème sombre est préféré
function isDarkPreferred() {
  return (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) && window.matchMedia(DARK_SCHEME_QUERY).matches)
  );
}

// Fonction pour appliquer le thème
function applyTheme(isDark) {
  document.documentElement.classList.toggle("dark", isDark);
}

// Fonction pour initialiser le thème
function initTheme() {
  // Appliquer le thème initial
  applyTheme(isDarkPreferred());

  // Écouter les changements de préférence système
  const mediaQuery = window.matchMedia(DARK_SCHEME_QUERY);

  // Utiliser addEventListener pour la compatibilité avec tous les navigateurs
  mediaQuery.addEventListener("change", e => {
    // Ne mettre à jour que si l'utilisateur n'a pas défini de préférence explicite
    if (!("theme" in localStorage)) {
      applyTheme(e.matches);
    }
  });
}

// Fonction pour changer de thème
function toggleTheme() {
  const isDark = document.documentElement.classList.contains("dark");
  document.documentElement.classList.toggle("dark", !isDark);
  localStorage.theme = isDark ? "light" : "dark";

  // Émettre un événement personnalisé pour informer d'autres composants du changement de thème
  document.dispatchEvent(
    new CustomEvent("themeChanged", { detail: { isDark: !isDark } })
  );
}

export { initTheme, toggleTheme };
