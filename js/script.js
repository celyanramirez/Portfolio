const backgroundImg = document.querySelector('.accueil');
const textElements = document.querySelectorAll('.accueil-txt, .accueil-btxt, .accueil-desc, .linkedin');

// fonction qui sera appelée à chaque fois que l'utilisateur scrollera sur la page
function onScroll() {
  // calcule la position de scroll actuelle
  const scrollPosition = window.pageYOffset;

  // déplace l'image de fond et les textes selon la position de scroll
  backgroundImg.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
  textElements.forEach((el) => {
    el.style.transform = `translateY(${scrollPosition * 0.3}px)`;
  });
}


// attache la fonction de scroll à l'événement "scroll"
window.addEventListener('scroll', onScroll);