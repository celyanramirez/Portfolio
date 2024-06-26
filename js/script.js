const backgroundImg = document.querySelector('.accueil');
const textElements = document.querySelectorAll('.accueil-txt, .accueil-btxt, .accueil-desc, .linkedin');
backgroundImg.style.background = 'url("../images/fond.png")';
backgroundImg.onload = () => {
  // Une fois que l'image est chargée, ajoute un listener pour détecter le scroll
  window.addEventListener('scroll', onScroll);
};
const messageDescription = document.getElementById("desc");
const msg1 = ["Étudiant en troisième année de <strong>BUT Informatique, parcours IAMSI,</strong><strong> à l’IUT de Montpellier</strong>, je suis intéressé par le domaine de l’informatique depuis un long moment. J'ai commencé mes premiers bouts de codes lors de mes années au collège, où j'ai tenté, tant bien que mal, de créer mes premiers petits jeux-vidéos <strong>2D</strong> grâce au <strong>C#</strong> et à Unity3D. C'est donc tout naturellement qu'au lycée, j'ai choisi les spécialités Mathématiques et Informatique, puis l'orientation en BUT Informatique par la suite. J'ai comme objectif et ambition de travailler dans le domaine du jeu vidéo, qui représente une passion pour moi depuis de longues années, notamment dans le management et la gestion."]
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
