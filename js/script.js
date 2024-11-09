const backgroundImg = document.querySelector('.accueil');
const textElements = document.querySelectorAll('.accueil-txt, .accueil-btxt, .accueil-desc, .linkedin');
backgroundImg.style.background = 'url("../images/fond.png")';
backgroundImg.onload = () => {
  // Une fois que l'image est chargée, ajoute un listener pour détecter le scroll
  window.addEventListener('scroll', onScroll);
};
const messageDescription = document.getElementById("desc");
const msg1 = ["Étudiant en première année de <strong>Master Management des Systèmes d'Information, parcours Consulting et Management des SI,</strong><strong> à l’IAE de Montpellier</strong>, je suis intéressé par le domaine de <strong>l’informatique</strong>, du <strong>digital</strong> et des <strong>nouvelles technologies</strong> depuis un long moment. Au cours de mon parcours académique, j'ai développé plusieurs intérêts et passions diverses : <strong>informatique, management, animation, montage vidéo, graphisme, organisation...</strong> Ceci s'est traduit par de nombreux projets, comme <strong>vidéaste Youtube</strong>, <strong>animateur d'une communauté</strong> ou encore <strong>organisateur d'événements</strong>. J'aimerais, à long terme, travailler dans le management et la gestion de projets dans le domaine du Jeu-Vidéo, qui est une passion qui me suit depuis le plus jeune âge."]
let textPosition = 0;
const speed = 0.1;

typeWriter = () => {
  messageDescription.innerHTML = msg1[0].substring(0, textPosition) + "<span>\u25ae</span>";

  if(textPosition++ != msg1[0].length){
    setTimeout(typeWriter, speed);
  }
}

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

function upscale(img) {
  var overlay = document.createElement("div");
  overlay.id = "overlay";
  document.body.appendChild(overlay);

  var imgOverlay = document.createElement("img");
  imgOverlay.src = img.src;
  imgOverlay.id = "img-overlay";
  imgOverlay.style.cursor = "pointer";
  overlay.appendChild(imgOverlay);

  //ferme l'image
  imgOverlay.onclick = function() {
    document.body.removeChild(overlay);
  };
}



// attache la fonction de scroll à l'événement "scroll"
window.addEventListener('scroll', onScroll);
window.addEventListener('scroll', reveal);
window.addEventListener('load', typeWriter);
