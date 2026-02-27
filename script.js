// Ce code sert à récupérer l'icône du menu
const menuIcon = document.querySelector('.menu-icon');

// Ce code sert à récupérer la barre de navigation
const navbar = document.getElementById('navbar');

// Ce code dit : quand on clique sur l'icône, on ouvre ou ferme le menu
menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('open');
});