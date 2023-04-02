const backgroundImg = document.querySelector('.accueil');
const textElements = document.querySelectorAll('.accueil-txt, .accueil-btxt, .accueil-desc, .linkedin');
backgroundImg.style.background = 'url("../images/fond.png")';
backgroundImg.onload = () => {
  window.addEventListener('scroll', onScroll);
};

function onScroll() {
  // calcule la position de scroll actuelle
  const scrollPosition = window.pageYOffset;
  //console.log(scrollPosition)

  // déplace l'image de fond et les textes selon la position de scroll
  backgroundImg.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
  textElements.forEach((el) => {
    el.style.transform = `translateY(${scrollPosition * 0.5}px)`;
  });
}

      
function reveal(){
  let reveals = document.querySelectorAll('.reveal');

  for(let i=0; i<reveals.length; i++){
    let windowHeight = window.innerHeight;
    let revealTop = reveals[i].getBoundingClientRect().top;
    let revealPoint = 150;

    if(revealTop < windowHeight - revealPoint){
      reveals[i].classList.add('active');
    }
  }
}



// attache la fonction de scroll à l'événement "scroll"
window.addEventListener('scroll', onScroll);
window.addEventListener('scroll', reveal);