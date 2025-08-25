const toggleBtn = document.getElementById('theme-toggle');
const setTheme = theme => {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
};
const getTheme = () => localStorage.getItem('theme') || 'light';
if (toggleBtn) {
  toggleBtn.onclick = () => {
    const current = getTheme();
    setTheme(current === 'light' ? 'dark' : 'light');
  };
  setTheme(getTheme());
}
