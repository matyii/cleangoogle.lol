var currentTheme = localStorage.getItem('theme');

function setThemeButtonState(theme) {
  var whiteModeButton = document.getElementById('whiteModeButton');
  var darkModeButton = document.getElementById('darkModeButton');
  
  if (theme === 'whiteMode') {
    whiteModeButton.classList.add('active');
    darkModeButton.classList.remove('active');
  } else {
    whiteModeButton.classList.remove('active');
    darkModeButton.classList.add('active');
  }
}

function toggleTheme(theme) {
  var body = document.body;
  
  if (theme === 'whiteMode') {
    body.classList.add('whiteMode');
    console.log('Current theme: White Mode');
  } else {
    body.classList.remove('whiteMode');
    console.log('Current theme: Dark Mode');
  }
  
  currentTheme = theme;
  localStorage.setItem('theme', currentTheme);
  setThemeButtonState(currentTheme);
}

window.addEventListener('DOMContentLoaded', function() {
  var body = document.body;
  
  if (currentTheme === 'whiteMode') {
    body.classList.add('whiteMode');
    console.log('Current theme: White Mode');
  } else {
    body.classList.remove('whiteMode');
    console.log('Current theme: Dark Mode');
  }
  
  setThemeButtonState(currentTheme);
});
