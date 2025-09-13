// Cet exercice est une variante de l'exercice 1

// Même départ, commencez par sélectionner la div du document à modifier
let divnode = document.querySelector("div");

/*  Q1
    Remplacer à nouveau le texte contenu dans la div.
    Mais cette fois, on utiliser une fenêtre pop-up pour permettre à l'utilisateur
    de saisir le texte de remplacement. Pour vous aider, vous pouvez :
    . regarder dans le cours...
    . regarder la doc et notamment l'objet Window (https://developer.mozilla.org/fr/docs/Web/API/Window)
    chercher dans la page des informations sur les "boites de dialogue"
*/
let inputText= prompt("What would you like to write?");
divnode.textContent=inputText;


/*  Q2
    Pour modifier le style d'un élément, il y a les définitions dites 'inline' via la propriété style.
    C'est de cette façon que vous avez a priori procédé dans l'exercice 1.0.
    Mais bien entendu, on peut aussi appliquer une classe de style. C'est même en général une meilleure
    pratique puisque les classes sont réutilisables et permettent de bien séparer le CSS du HTML. Les
    définitions 'inline' ne s'appliquent qu'à un seul élément et se 'mélangent' au HTML (ou au JS !).

    Créez un fichier style.css que vous incluerez dans l'entête du document index.html
    Dans ce fichier CSS, déclarez une classe de style nommée 'tollens' qui définie le même style que dans 
    L'exercice 1.0. A savoir :
    . la couleur de fond est égale à #eebb00
    . la largeur de l'élément est fixée à 200 pixels
    . le texte contenu est centré

    Puis, ajoutez ci-dessous l'instruction javascript permettant d'attribuer la classe 'tollens' à divnode
    Vous pouvez chercher ce qui concerne les classes de style dans les propriétés d'un élément (https://developer.mozilla.org/fr/docs/Web/API/Element)
*/
// divnode.setAttribute("class","tollens");
//divnode.className="tollens";
divnode.classList.add("tollens");
