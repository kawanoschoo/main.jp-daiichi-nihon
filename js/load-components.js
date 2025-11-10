// js/load-components.js
document.addEventListener('DOMContentLoaded', function() {
// ハンバーガーメニューの読み込み
const hamburgerElement = document.getElementById('hamburger');
if (hamburgerElement) {
    fetch('/components/hamburger.html')
    .then(response => response.text())
    .then(data => {
        hamburgerElement.innerHTML = data;
    })
    .catch(error => console.error('Error loading hamburger:', error));
}
});