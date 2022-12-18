function toggleMode() {
  const themeMode = this.dataset.themeMode;
  const html = document.documentElement;

  if (themeMode === 'light') {
    html.classList.add('dark-mode')
    this.dataset.themeMode = 'dark'
  } else {
    html.classList.remove('dark-mode')
    this.dataset.themeMode = 'light'
  } 
}

const btn = document.querySelector('.switch-mode-btn');
btn.addEventListener('click', toggleMode);