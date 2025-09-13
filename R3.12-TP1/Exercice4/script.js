/*
   Objectif de l'exercice :
   
   . Comprendre la notion de "d'élément cible" d'un événement
   . Comprendre la notion de fonction "gestionnaire d'événement" 
   . Savoir gérer un événement simple avec la méthode addEventListener :
        -> savoir surveiller un événement donné sur un élément cible
        -> savoir attacher une fonction "gestionnaire d'événement" à un élément cible
   . Corollaire : comprendr la notion de fonction "callback" (déclarée par le programmeur mais appelée par ne navigateur)
  
   En répondant correctement aux questions de cet exercice, vous devez obtenir un rendu analogue
   au visuel objectif.mp4 disponible dans le répertoire asset.

   Comme d'habitude, interdiction d'éditez directement les fichiers index.html et style.css 

   Indications :
   Vous disposez de 3 classes de style déjà définies dans le fichier style.css. Il s'agit des classes
   "alpha", "beta" et "gamma". Affecter l'une de ces classes à l'élément h1 du document HTML permet de
   modifier son apparence.
   Vous noterez que les "boutons" de l'interface sont des éléments span qui possèdent pour identifiant 
   le même nom que la classe de style qu'il vous faut appliquer si l'on clique dessus. 
   Pour cet exercice, on n'exploitera pas davantage cette corrélation entre identifiant de bouton et 
   nom de classe de style. Mais nous y reviendrons plus tard.

*/


/* Q1

   Le code ci-dessous permet d'appliquer la classe de style "alpha" à l'élément h1 du document 
   lorsque l'utilisateur clique sur l'élément span d'identifiant "alpha".

   Lisez et comprenez cet exemple. Puis dupliquez-le en l'adaptant afin de rendre fonctionnel
   tous les autres "boutons".
*/

/* handler_alphaspan 
   . pas de paramètre
   > valeur de retour : aucune

   L'appel de cette fonction permet d'attribuer la classe de style alpha à l'élément h1 du document HTML.

   Note : 
   Cette fonction est, du strict point de vue du code, une fonctionn comme n'importe quelle autre.
   Mais, dans son usage, c'est une fonction "gestionnaire d'événement". C'est-à-dire qu'elle est destinée
   à être appelée seulement lorsqu'un événement se produit sur un élément donné (qu'on appellera élément cible).
   Pour plus facilement distinguer dans le code les fonctions gestionnaires d'événements, on choisit ici
   de préfixer leur nom par "handler_" (handler signifiant gestionnaire en anglais).
*/
let handler_alphaspan = function(){
    let h1 = document.querySelector('h1');
    h1.className = "alpha";
};

let alphaspan = document.querySelector('#alpha');
let handler_betaspan = function(){
    let h1 = document.querySelector('h1');
    h1.className = "beta"; 
};

let betaspan = document.querySelector('#beta');


let handler_gammaspan = function(){
    let h1 = document.querySelector('h1'); 
    h1.className = "gamma";
};

let gammaspan = document.querySelector('#gamma');
let handler_nonespan = function(){
    let h1 = document.querySelector('h1');
    h1.className = "none";
};

let nonespan = document.querySelector('#none');



/*
    On souhaite ensuite qu'handler_alphaspan soit appelée chaque fois que l'utilisateur clique sur 
    l'élément alphaspan. Mais on ne sait pas si et quand cela se produira. Donc on va demander au
    navigateur de surveiller pour nous les événements de type 'click' sur l'élément alphaspan. Et
    on va "attacher" à cet élément le code de notre fonction handler_alphaspan. Ce faisant, si le
    navigateur détecte un clic sur alphaspan, c'est lui qui appellera (executera) notre fonction
    handler_alphaspan. On parle aussi de fonction "callback" (littéralement : appel arrière) car
    c'est nous qui déclarons la fonction, mais c'est le navigateur qui l'appelera en arrière plan.

    Tout ceci se fait en une seule instruction grâce à la méthode addEventListener :
    . l'élément auquel on applique addEventListner (ici alphaspan) est l'élément cible, là où le navigateur doit faire sa "surveillance"
    . le premier paramètre d'addEventListener est une chaine qui identifie le type de l'événement à surveiller
    . le second paramètre d'addEventListener est le CODE de la fonction que le navigateur doit appeler si jamais
    l'événement se produit. Mais c'est bien le CODE de la fonction que l'on transmet, d'où la syntaxe handler_alphaspan (le code)
    et non handler_alphaspan() (l'appel). Donc le nom de la fonction mais SANS les parenthèses derrière. Cette différence de 2
    caractères est très importante.

    Pour plus de détails, vous pouvez vous référez à la documentation :
    https://developer.mozilla.org/fr/docs/Web/API/EventTarget/addEventListener
*/
alphaspan.addEventListener('click', handler_alphaspan);
betaspan.addEventListener('click', handler_betaspan);gammaspan.addEventListener('click', handler_gammaspan);
nonespan.addEventListener('click', handler_nonespan);
// Ajoutez vos instructions ici


/* Debriefing

   A ce stade, cela fonctionne. En revanche, vous avez certainement le sentiment d'avoir écrit
   à peu près 4 fois la même chose...
   Et on perçoit bien que cette façon de faire ne va pas pouvoir se généraliser à des dizaines et des
   dizaines de boutons...

   Donc dans l'exercice suivant, vous allez en faire une version un peu plus concise.

*/