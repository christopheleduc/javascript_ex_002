console.log('exercice 1');
// 1) En haut du fichier script.js, écrivez un commentaire qui explique la différence entre Javascript et JQuery ( c'est fondamental de comprendre avant d'aller plus loin ! ).

// C'est une librairie JavaScript, mais c'est aussi une bibliothèque de fonctions qui exploitent évidement JavaScript.
// Cela permet de programmer et d'exploiter JavaScript plus facilement. De manipuler le DOM plus simplement qu'en Javascript.
// Il y a aussi une notion de popularité historique spécifique qui explique son utilisation car il à permis de contourner de nombreux bug pendant un temps
// liés à l'implémentation de ce dernier dans les navigateurs... Il existe de très nombreuses librairies, et la justification de son utilisation n'est plus
// du tout évidente...

// Le Document Object Model (DOM) est une interface de programmation normalisée par le W3C, 
// qui permet à des scripts d'examiner et de modifier le contenu du navigateur web. Je crois me rapeller que DOM s'appuie sur XML (un format ou plutot un paradigme
// d'organisation des données)...

//******************************************************************************************************************************************//
// DEFINITION par JQuery !!! :                                                                                                              //
//                                                                                                                                          //
// jQuery est une bibliothèque JavaScript rapide, petite et riche en fonctionnalités.                                                       //
// Il rend les choses comme la traversée et la manipulation de documents HTML,                                                              //
// la gestion d'événements, l'animation et Ajax beaucoup plus simples avec une API facile à utiliser qui fonctionne                         //
// sur une multitude de navigateurs. Avec une combinaison de polyvalence et                                                                 //
// d'extensibilité, jQuery a changé la façon dont des millions de personnes écrivent en JavaScript.                                         //
//******************************************************************************************************************************************//

// 2)  Ajouter donc une balise script qui permet d'inclure Jquery. Où placer vous cette balise script par rapport à la balise existante <script src="script.js"></script> et pourquoi ?

// Réponse: Dans le fichier HTML ou PHP! La balise peut etre integrée en début ou fin du conteneur "HEAD", moi je le met presque toujour avant
// "JavaScript" puisqu'il l'utilse, et juste après le "meta charset", mais les recommandations sont plutot de l'inclure ainsi que les appel aux autres 
// librairies en fin de page avant la balise "</body>" pour de meilleurs performance au chargement (jammais vu de différences!!!). Ex: https://www.alsacreations.com/astuce/lire/916-librairie-javascript-jquery-script.html

// 3) Vérifier que vous avez bien ajouté la librarie en insérant le code ci-dessous 
// et assurez-vous que le message s'affiche dans la console de votre navigateur.

$(document).ready(function(){
	console.log('Je peux maintenant écrire du code JQuery');
});

// 4) Commenter les lignes de codes ci dessus.

// La méthode ready() est utilisée pour rendre une fonction disponible après le chargement du document.
// Quel que soit le code que vous écrivez dans la méthode $(document).ready(),
// il sera exécuté une fois que le DOM de la page sera prêt à exécuter du code JavaScript.

// 5) En quoi cette ligne est indispensable ?

// Sinon la fonction n'est pas disponible (c'est dans la definition).

// 6) Quel symbole permet de repérer dans un programme Javascript que du JQuery est utilisé ? (attention, ce n'est pas toujours le cas...)

// le symbole '$'.
