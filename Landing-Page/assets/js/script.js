const sunIcon = document.querySelector('.bi-sun-fill');
const moonIcon = document.querySelector('.bi-moon-fill');
const body = document.body;

function toggleTheme() {
    body.classList.toggle('light-mode');
    sunIcon.classList.toggle('hidden');
    moonIcon.classList.toggle('hidden');
}

sunIcon.addEventListener('click', toggleTheme);
moonIcon.addEventListener('click', toggleTheme);
const burgerMenu = document.querySelector('.burger-menu');
const navLinks = document.querySelector('.nav-links');
const navLinksMobile = document.querySelector('.nav-links-mobile');

burgerMenu.addEventListener('click', () => {
navLinks.classList.toggle('active');
navLinksMobile.classList.toggle('active');
});


const urlParams = new URLSearchParams(window.location.search);
const name = urlParams.get('name');
if (name) {
    document.getElementById('saudacao').innerText = `Olá ${name}, somos..`;
}

moonIcon.classList.add('hidden');