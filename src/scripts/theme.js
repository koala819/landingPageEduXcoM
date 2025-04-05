// Fonction pour initialiser le thème
function initTheme() {
    // Vérifier les préférences sauvegardées ou le thème système
    const isDark = localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);

    // Appliquer le thème
    document.documentElement.classList.toggle('dark', isDark);
  }

  // Fonction pour changer de thème
  function toggleTheme() {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    }
  }

  export { initTheme, toggleTheme };