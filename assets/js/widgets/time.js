var timeToggle = document.getElementById('timeToggle');
var timeWidget = document.getElementById('timeWidget');

var savedState = localStorage.getItem('timeWidgetState');

if (savedState === 'enabled') {
    timeToggle.checked = true;
    timeWidget.style.display = 'block';
  console.log('Time widget enabled (from local storage)');
} else {
    timeToggle.checked = false;
    timeWidget.style.display = 'none';
  console.log('Time widget disabled (from local storage)');
}

function toggleTimeWidget() {
  if (timeToggle.checked) {
    timeWidget.style.display = 'block';
    localStorage.setItem('timeWidgetState', 'enabled');
    console.log('Time widget enabled');
  } else {
    timeWidget.style.display = 'none';
    localStorage.setItem('timeWidgetState', 'disabled');
    console.log('Time widget disabled');
  }
}

function updateTime() {
    var currentTime = new Date();
    var timeElement = document.getElementById("time");
    timeElement.innerHTML = currentTime.toLocaleTimeString();
}

updateTime();
setInterval(updateTime, 1000);