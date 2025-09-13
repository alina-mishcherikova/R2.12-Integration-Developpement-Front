/*
   Objectif de l'exercice :
   
   . Savoir exploiter la propagation des événements dans un cas de figure plus complexe

   En répondant correctement aux questions de cet exercice, vous devez obtenir un rendu analogue
   au visuel objectif.mp4 disponible dans le répertoire asset.

   Comme d'habitude, interdiction d'éditez directement les fichiers index.html et style.css 

   Contexte :
   On vous donne une page déjà formatée (une vue). Ici on n'a pas la main sur les données utilisées
   pour formater la page, il faut se débrouiller uniquement avec le document du fichier index.html.
   Comme illustré dans la vidéo objectif.mp4, le but est de mettre en "surbrillance" l'une des 3
   propositions pour chaque catégorie (entrées, plats, desserts) lorsque l'utilisateur clique dessus.
   Et l'on aura remarqué que choisir une nouvelle proposition enlève également la "surbrillance" pour
   la précédente proposition sélectionnée de la même catégorie.

   Indications :
   Dans style.css, vous avez déjà une classe de style "selected" qui est celle à appliquer pour mettre
   une proposition en surbrillance. C'est aussi cette classe de style qu'il faudra retirer pour
   supprimer l'effet de surbrillance.
   Etudiez bien le DOM du document pour bien comprendre sa structure. 
   Vous noterez que chaque proposition (nom du plat, prix et description) est incluse dans un élément li.
   *** POINT IMPORTANT *** 
   Tous les éléments inclus dans les li ont une propriété css "pointer-events:none"
   (Au besoin : https://developer.mozilla.org/fr/docs/Web/CSS/pointer-events)
   Cela veut dire que, où que l'on clique sur une proposition (son nom, son prix ou sa description), le 
   navigateur créera un objet Event de type 'click' dont l'élément cible sera toujours le li contenant la proposition.
   Ce n'est pas une complication, au contraire. Ainsi nous pouvons raisonner en se disant qu'un clic sur une 
   proposition, c'est forcéement un click sur un li.

*/


/* Q1

   Faites en sorte que, si l'on clique sur une proposition, la classe de style "selected" soit attribuée au
   li la contenant. Dans un premier temps, on ne s'occupera pas d'enlever cette classe si d'autres propositions
   ont déjé été choisies.

   Indications : 
   . Vous demanderez au navigateur de surveiller les "click" en UN SEUL endroit !
   . Les éléments li possèdent plusieurs classes de style. Si vous écrivez quelque chose comme li.className="selected";
     vous allez écraser ces autres classes. Sur des éléments qui possèdent plusieurs classes, il est donc recommandé 
     d'utiliser la propriété classList (et ses métodes add ou remove) : https://developer.mozilla.org/fr/docs/Web/API/Element/classList

*/

// Ajoutez vos instructions ici


/* Q2

   Il faut à présenter faire en sorte d'enlever la classe "selected" à un li chaque fois que l'utilisateur
   change de proposition. On procédera de manière "non chirurgicale". C'est à dire que si l'on clique sur
   une proposition d'une catégorie, on commencera par enlever la classe "selected" à toutes les propositions
   de cette même catégorie. Notez qu'enlever une classe à un élément qui ne la possède pas n'engendre pas 
   d'erreur, c'est sans effet.

   Indications :
   Représentez-vous bien le parcours des "click" pour déterminer où agir. 
   Vous pourriez éventuellement faire bon usage de la propriété currentTarget des objets Event :
   https://developer.mozilla.org/fr/docs/Web/API/Event/currentTarget
   Si vous avez du mal, vous pouvez passer par une version intermédiaire qui ne traiterait que les entrées
   par exemple. Puis généraliser aux plats et desserts.

*/

// Ajoutez vos instructions ici
