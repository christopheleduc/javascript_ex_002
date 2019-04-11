console.log("exercice 3");

// 1)= changez le titre "My portfolio" par votre prénom.

$('.container*>h1:first-child').text('Christophe');

// 2) changez aussi le texte 'Some text that represents "Me"...' par une tagline vous représentant.

$('p:first').text('Je suis super beau et intelligent et je soulève des montagnes. Je peux aussi voller, et accessoirement, j\'aime bien courrir après Super Girl.');

// 3) votre portfolio ne comprendra qu'une page : supprimez la navigation de la navbar mais laissez le bouton Login.

//$('.nav.navbar-nav:not(.navbar-right)').remove();
$('.nav.navbar-nav:not(.navbar-right)').empty();

// 4) changez l'icone de ce bouton d'ailleurs, elle n'est pas très jolie, choisissez en une dans la liste possible de bootstrap;

$('.glyphicon-log-in').replaceWith('<span class="glyphicon glyphicon-user"></span>');
// .replaceWith('<span>Salut!</span>');

// 5) changez votre footer en mettant Copyright 2017 ( respecter le gras )

$('footer p').replaceWith('<p><b>Copyright 2017</b></p>');

// 6) modifiez le texte des paragraphes de la première ligne d'images. Tous les textes "Some text..." doivent être remplacés 
// par "Mon projet"; Bonus: ajouter le numéro du projet c'est à dire 'Mon projet 1' 'Mon projet 2'...



// 7) choisissez une image sur internet et changez toutes les images du projet par cette image. Bonus: personnalisez chacune des images;

// 8) vous venez de réaliser un nouveau projet et vous souhaitez le mettre sur votre portfolio. De plus, comme c'est le dernier,
// vous souhaitez qu'il apparaisse au dessus des autres et qu'il soit plus grand pour être mis en valeur. Choisissez une 
// image et un texte et ajoutez le au-dessous de "Some of my work". Ajustez la taille de l'image pour être de 250px de haut;

// 9) la classe intro a été définie dans le fichier 'index.css'. Ajoutez cette classe au footer afin de changer l'affichage en rouge.