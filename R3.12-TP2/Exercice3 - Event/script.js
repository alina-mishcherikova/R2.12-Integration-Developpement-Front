/*
   Objectif de l'exercice :
   
   . Comprendre le principe de propagation des événements (bubbling)
   . Savoir exploiter cette propagation pour déléguer (et regrouper) la surveillance d'événements à un élément parent

   En répondant correctement aux questions de cet exercice, vous devez obtenir un rendu analogue
   au visuel objectif.mp4 disponible dans le répertoire asset.

   Comme d'habitude, interdiction d'éditez directement les fichiers index.html et style.css 

   Indications :
   Comme déjà rappelé, lorsqu'un événement se produit, le navigateur crée un objet Event au niveau de la
   cible de l'événement (c'est-à-dire l'élement sur lequel l'événement s'est produit). Mais ensuite cet 
   objet Event va se propager dans l'arborescence DOM du document et remonter jusqu'à sa racine.
   C'est ce qu'on appelle le "bubbling" à l'image des bulles qui remontent à la surface lorsqu'on chauffe de l'eau.
   La conséquence est que l'on n'est pas obligé de surveiller un type d'événement là où il peut apparaître (la cible). 
   Mais on peut le surveiller au niveau de n'importe quel élément qu'il rencontrera en remontant vers la racine du document.
   Si vous affichez dans la console un objet Event, vous verrez qu'il possède une propriété 'path' qui est un tableau de 
   tous les éléments rencontrés par l'événement, de la cible à la racine du document.

*/


/* handler_ckickOnButton
   . paramètre ev : l'objet Event transmis par le navigateur lorsqu'il appellera la fonction à la détection d'un 'click'
   > valeur de retour : aucune

  Pour compléter cette fonction, vous pouvez repartir du dernier exercice du TP1. Mais il vous faudra par la suite
  la rectifier (un tout petit peu)
*/
let handler_clickOnButton = function(ev){
    // complétez le code de cette fonction
};

/* Sur quel élément (au singulier !) peut-on surveiller tous les 'clicks' sur les spans ?
   Identifiez cet élément et attachez-y votre fonction handler_clickOnButton */

// Ajoutez ici vos instructions

/*  [TEST]
    Les boutons fonctionnnent ? Bravo ! Et si vous cliquez un petit peu à côté ?
    Probablement, vous aurez une barre noire à la place de 'Javascript'. Si tel est le cas, 
    trouvez l'explication à ce problème et modifiez ensuite le code de la fonction handler_clickOnButton
    pour le corriger.
*/


/* Debriefing

  Cette fois il ne reste plus rien à améliorer. 
  Nous avons une seule fonction gestionnaire d'événement pour nos 4 "boutons"
  Nous surveillons en un seul élément les événements 'click' sur ces boutons.
  On ne peut pas faire moins, donc pas faire mieux.

  Comparer le code de l'exercice 1 à celui de l'exercice 3 pour vous en convaincre éventuellement !
  
*/