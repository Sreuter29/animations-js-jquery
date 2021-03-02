
//LIGNE JAVASCRIPT
const allLetters = document.querySelectorAll('.bloc span');
const ligne = document.querySelector('.ligne');
const TLLetters = gsap.timeline();

TLLetters
.from(ligne, {width: '0%', opacity: 0, duration: 0.7, ease: "power1.in"})
.from(allLetters, {opacity:0, top: gsap.utils.wrap([100,-100]), stagger: 0.1, ease: "power2.out"})
.set(ligne, {width: '85vw'})
// YEUX
let balls = document.getElementsByClassName("ball");

document.onmousemove = function () {

  let x = event.clientX * 100 / window.innerWidth + "%";
  let y = event.clientY * 100 / window.innerHeight + "%";


  for (let i = 0; i < 2; i++) {
    balls[i].style.left = x;
    balls[i].style.top = y;
    balls[i].style.transform = "translate(-" + x + ",-" + y + ")";
  }
}

// PAGE CORNEE
$(function(){
  $('.page').hover(
    function(){
      $(this).stop().animate({width: 150, height: 150}, 500);
    },
    function(){
      $(this).animate({width: 50, height: 50}, 500);
    }
  )
});

//BASKET BALL
var cadre = document.getElementById("cadre");
var ballon = document.getElementById("ballon");
var vitesse = 7; // Valeur du déplacement en pixels
// Conversion en nombre du diamètre du ballon (valeur de la forme "XXpx")
var diametreBallon = parseFloat(getComputedStyle(ballon).width);
var animationId = null; // Identifiant de l'animation
var xMin = 0; // Position gauche minimale (bord gauche)
var direction = 1; // Sens de déplacement : 1 = droite, 2 = gauche

// Déplace le ballon vers la gauche ou la droite
function animerBallon() {
  // Conversion en nombre de la position gauche du bloc (valeur de la forme "XXpx")
  var xBallon = parseFloat(getComputedStyle(ballon).left);
  // Conversion en nombre de la largeur du cadre (valeur de la forme "XXpx")
  var xMax = parseFloat(getComputedStyle(cadre).width);
  // Si le ballon arrive à un bord du cadre
  if ((xBallon + diametreBallon > xMax) || (xBallon < xMin)) {
    // On inverse le sens de déplacement du ballon
    direction *= -1;
  }
  // Déplacement du ballon dans le sens actuel
  ballon.style.left = (xBallon + vitesse * direction) + "px";
  // Demande au navigateur d'appeler animerBallon dès que possible
  animationId = requestAnimationFrame(animerBallon);
}

var demarrerBtn = document.getElementById("demarrer");
var arreterBtn = document.getElementById("arreter");

demarrerBtn.addEventListener("click", function () {
  // Change l'état des boutons
  demarrerBtn.disabled = true;
  arreterBtn.disabled = false;
  // Démarre l'animation
  requestAnimationFrame(animerBallon);
});

arreterBtn.addEventListener("click", function () {
  // Change l'état des boutons
  demarrerBtn.disabled = false;
  arreterBtn.disabled = true;
  // Arrête l'animation
  cancelAnimationFrame(animationId);
});

//COMPTEUR ANIME
var num = 1;
function counter(num) {

}
$(document).ready(function() {
  $('.button').click(function() {
    num++;

    $('.count-leave').addClass('count-leave-active');
    setTimeout(function() {
      $('.count-leave').remove();
    }, 250);

    $('.count-enter').addClass('count-enter-active');
    setTimeout(function() {
      $('.count-enter').addClass('count-leave').removeClass('count-enter count-enter-active');
      $('.compteur').append('<h1 class="count count-enter">'+ num +'</h1>')
    }, 250);

  })
});

//autodestruction
var compteurElt = document.getElementById("compteur");
var player = document.querySelector('video');

// Diminue le compteur jusqu'à 0
function diminuerCompteur() {
  // Conversion en nombre du texte du compteur
  var compteur = Number(compteurElt.textContent);
  if (compteur > 1) {
    compteurElt.textContent = compteur - 1;
  } else {
    // Annule l'exécution répétée
    clearInterval(intervalId);
    // Modifie le titre de la page
    var titre = document.getElementById("titre");
    titre.textContent = "";
    // Modification du titre au bout de 1 seconde
    setTimeout(function () {
      player.play()
    }, 1000);
  }
}

// Appelle la fonction diminuerCompteur toutes les secondes (1000 millisecondes)
var intervalId = setInterval(diminuerCompteur, 1000);

//CHRONO
var bouton = document.getElementById("button");
var compteurElt2 = document.getElementById("compteur2");
var intervalId2 = null;
var demarre = false; // Etat du chronomètre : démarré (true) ou arrêté (false)

// Augmente le compteur de 1
function augmenterCompteur() {
  compteurElt2.textContent = Number(compteurElt2.textContent) + 1;
}

bouton.addEventListener('click', function () {
  if (!demarre) {
    // Démarre le chronomètre : appelle augmenterCompteur toutes les secondes
    intervalId2 = setInterval(augmenterCompteur, 1000);
    bouton.textContent = "Arrêter"; // Modifie le texte du bouton
  } else {
    clearInterval(intervalId2); // Arrête le chronomètre
    bouton.textContent = "Démarrer"; // Modifie le texte du bouton
  }
  // Inverse la valeur de l'état du chronomètre
  demarre = !demarre;
});
