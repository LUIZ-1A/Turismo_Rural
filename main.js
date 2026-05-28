// Seleção dos elementos do DOM
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Função para abrir/fechar o menu mobile
function toggleMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}

// Ouvinte de evento para o clique no botão hambúrguer
hamburger.addEventListener('click', toggleMenu);

// Fecha o menu mobile automaticamente ao clicar em um link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});