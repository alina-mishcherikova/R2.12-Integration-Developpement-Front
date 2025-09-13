// Q1
// Sélectionner la div à l'aider de document.querySelector
// (https://developer.mozilla.org/fr/docs/Web/API/Document/querySelector)
let divnode = document.querySelector("div")

// Q2
// Remplacez le text de la div par 'Javascript
// Pour trouver quelle propriété de divnode vous devez modifier, vous pouvez :
// . regarder le cours
// . regarder la doc : https://developer.mozilla.org/fr/docs/Web/API/Node
// . frapper console.dir(divnode) dans la console et chercher dans toutes les propriétés listées
// Note : cette démarche est valable chaque fois qu'on cherche à modifier un élément du DOM !
divnode.textContent="Replace";
// Q3
// Modifier les propriétés de style de la div pour lui donner la couleur de fond #eebb00
divnode.style="background-color:#eebb00";
// Q4
// Modifier les propriétés de style de la div pour fixer sa largeur à 200 pixels
divnode.style.width="200px";
// Q5
// Modifier les propriétés de style de la div pour centrer son contenu text
divnode.style.textAlign="center";