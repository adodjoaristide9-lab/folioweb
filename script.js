// Ce code sert à récupérer l'icône du menu
const menuIcon = document.querySelector('.menu-icon');

// Ce code sert à récupérer la barre de navigation
const navbar = document.getElementById('navbar');

// Ce code dit : quand on clique sur l'icône, on ouvre ou ferme le menu
menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('open');
});







function ouvrirModal() {
  document.getElementById("modal").style.display = "block";
}

function fermerModal() {
  document.getElementById("modal").style.display = "none";
}

window.onclick = function(event) {
  const modal = document.getElementById("modal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
}