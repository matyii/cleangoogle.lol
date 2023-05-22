var quoteToggle = document.getElementById('quoteToggle');
var quoteWidget = document.getElementById('quoteWidget');

var savedState = localStorage.getItem('quoteWidgetState');

if (savedState === 'enabled') {
  quoteToggle.checked = true;
  quoteWidget.style.display = 'block';
  console.log('Quote widget enabled (from local storage)');
} else {
  quoteToggle.checked = false;
  quoteWidget.style.display = 'none';
  console.log('Quote widget disabled (from local storage)');
}

function toggleQuoteWidget() {
  if (quoteToggle.checked) {
    quoteWidget.style.display = 'block';
    localStorage.setItem('quoteWidgetState', 'enabled');
    console.log('Quote widget enabled');
  } else {
    quoteWidget.style.display = 'none';
    localStorage.setItem('quoteWidgetState', 'disabled');
    console.log('Quote widget disabled');
  }
}

fetch("https://api.quotable.io/quotes/random?maxLength=40")
.then(response => response.json())
.then(data => {
    const quote = data[0]['content']
    const element = document.getElementById('quote')
    element.innerHTML = quote
})