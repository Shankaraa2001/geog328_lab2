var icon = document.querySelector('.icon');
var topnav = document.getElementById('myTopnav');

function toggleMenu() {
    topnav.classList.toggle('responsive');
}

icon.addEventListener('click', toggleMenu);
