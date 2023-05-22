function openSettings() {
    var overlay = document.querySelector('.overlay');
    var settingsWindow = document.querySelector('.settingsWindow');
    overlay.classList.add('active');
    settingsWindow.classList.add('active');
}

function closeSettings() {
    var overlay = document.querySelector('.overlay');
    var settingsWindow = document.querySelector('.settingsWindow');
    overlay.classList.remove('active');
    settingsWindow.classList.remove('active');
}

function openTab(tabName) {
    var i, tabContent, tabButton;
    tabContent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    tabButton = document.getElementsByClassName("tabButton");
    for (i = 0; i < tabButton.length; i++) {
        tabButton[i].className = tabButton[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += " active";
}

window.addEventListener("DOMContentLoaded", function() {
    var firstTabButton = document.getElementsByClassName("tabButton")[0];
    firstTabButton.click();
});