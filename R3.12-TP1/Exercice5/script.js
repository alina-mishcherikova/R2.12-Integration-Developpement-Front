/*
   Objectif de l'exercice :
   
   . Savoir exploiter l'objet Event créé par le navigateur pour tout événement

   En répondant correctement aux questions de cet exercice, vous devez obtenir un rendu analogue
   au visuel objectif.mp4 disponible dans le répertoire asset.

   Comme d'habitude, interdiction d'éditez directement les fichiers index.html et style.css 

   Indications :
   Si l'objectif à atteindre est le même que dans le précédent exercice, cette fois vous n'avez
   le droit d'écrire qu'une seule fonction "callback" gestionnaire d'événement (au lieu de 4 dans la version précédente)


   Notes :
   Qu'on les surveille ou non, le navigateur crée systématiquement un objet Event pour tous les événements qui se 
   produisent. En fait ces objets Event représentent les événements. Le navigateur y enregistre toutes les
   informations qui leur sont liées. Par exemple, on y trouvera une propriété 'target' qui est l'élément cible de
   l'événement. Si c'est un clic, on y trouvera ses coordonnées sur l'interface. Si c'est une frappe clavier, on y
   trouvera le caractère correspondant, etc... Bref, plein d'informations qui peuvent nous être très utiles.

   Mais comment "récupérer" l'objet Event d'un événement que l'on surveille ? Pour ce il suffit de prévoir un 
   paramètre à notre fonction gestionnaire de l'événement. Si on le fait, alors le navigateur transmettra toujours
   l'objet Event qu'il a créé en paramètre de notre fonction lorsqu'il l'appellera.
   
   Documentation : 
   https://developer.mozilla.org/fr/docs/Web/API/event (générale)
   https://developer.mozilla.org/fr/docs/Web/API/MouseEvent (événements liés à l'utilisation de la souris)
   https://developer.mozilla.org/fr/docs/Web/API/EventTarget/addEventListener (exemples pour utiliser les objets Event)

*/


/* handler_ckickOnButton
   . paramètre ev : ev représente donc l'objet Event que transmettra le navigateur si et quand il appelle notre fonction
   > valeur de retour : aucune

   Indications : 
   Vous utiliserez les (bonnes) informations contenues dans l'objet Event (ev) transmis par le navigateur.
   Vous exploiterez la corrélation entre l'identifiant des spans et le nom des classes de style à appliquer : si vous
   pouvez récupérer l'identifiant du span sur lequel l'utilisateur a cliqué, alors vous avez le nom de la classe de 
   style à appliquer.
*/
let handler_clickOnButton = function(ev){
    // Complétez le code de la fonction pour que le bon style soit appliqué à l'élément h1 du document
    // quel que soit le "bouton" sur lequel l'utilisateur a cliqué
    let h1=document.querySelector("h1");
    h1.className=ev.target.id;
};

// Sélection de tous les élements span du document. Attention, spans est donc une LISTE d'élements span. 
let spans = document.querySelectorAll('span');
// Parcours de la liste des spans et ajout à chacun de la fonction handler_clickOnButton en gestionnaire d'événement 'click'
// Le navigateur va donc surveiller les 'click' sur chaque élément span. Et si un 'click' se produit, il appellera la
// fonction handler_clickOnButton en lui transmettant l'objet Event de l'événement en paramètre.
for(let i=0; i<spans.length; i++){
    let node = spans[i];
    node.addEventListener('click', handler_clickOnButton);
}


/* Debriefing

   Vous disposez d'un code déjà bien moins redondant ! Et moins on en écrit, mieux on se porte.
   Il reste un point améliorable : 
   Dans cette version, le navigateur surveille les événements 'click' au niveau de chaque élément span.
   Donc il surveille en 4 endroits. Plus il a de surveillance à faire, plus votre application sera gourmande en ressource.
   A un certain point, cela peut nuire à la réactivité de l'interface, ou faire des applications qui vident un peu vite
   les batteries des terminaux mobiles.

   Donc dans un prochain TP, vous améliorerez ce dernier point.
  
*/