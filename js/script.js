// on cible l'élément « path » que l'on veut animer 
var dessins = document.querySelectorAll("#monSVG path");

// la longueur du chemin «path»
for (var i = 0; i < dessins.length; i++) {
	// La longueur du tracé
	longueur = dessins[i].getTotalLength()

	dessins[i].style.strokeDasharray = longueur;
	dessins[i].style.strokeDashoffset = longueur;
}

// extraire la fraction du déplacement de la barre de défilement et  ajusté le tracé
window.addEventListener("scroll", maTrace);

function maTrace() {
  var fractionDuScroll = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

  for (var i = 0; i < dessins.length; i++) {
  	longueur = dessins[i].getTotalLength();
  	trace = dessins[i].getTotalLength();
  	dessins[i].style.strokeDashoffset = longueur - trace * fractionDuScroll ;
  }
}