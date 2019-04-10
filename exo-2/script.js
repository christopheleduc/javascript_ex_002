console.log('exercice 2');

// 1) Il existe trois principaux types de sélecteurs en JQuery, lesquels ?

// Alors là, c'est une bonne question puisque JQuery permet d'utiliser tous les selecteurs: https://www.w3.org/TR/selectors-3/
// Donc, s'il faut ordonner et prioriser, je dirais:
// "*" qui permet de TOUT selectionner, dans la page ou dans un selecteur précis...
// "#" "mon_id" sélectionne la balise dont l'identificateur est "mon_id" (elle doit être unique dans la page)...
// "." "ma_classe" sélectionne toutes les balises de classe "ma_classe"...
// "[name]" sélectionne toutes les balises qui ont un attribut "name"...
// "[attribute=value]" ex. [target=_blank] qui sélectionne tous les éléments pour lesquels l'attribut target a la valeur _blank.
// "[attribute~=value]" ex. [title~=fleur] qui sélectionne tous les éléments avec un attribut title contenant le mot "fleur";
// "[attribute|=value]" ex. [lang|=en] qui sélectionne tous les éléments dont la valeur de l'attribut lang commence par "en";
// "[attribute^=value]" ex. a[src^="https"] qui sélectionne tous les éléments <a> dont la valeur de l'attribut src commence par "https"
// "[attribute$=value]" ex. a[src$=".pdf"] qui sélectionne tous les éléments <a> dont la valeur de l'attribut src se termine par ".pdf";
// "[attribute*=value]" ex. a[src*="gtro"] qui sélectionne tous les éléments <a> dont la valeur de l'attribut src contient la sous-chaîne "gtro";
// ":attribute(value)" ex. p:lang(it) qui sélectionne tous les éléments <p> dont la valeur de l'attribut lang commence par "it";
//
// Exemple qui affiche les titres des éléments <h1> de la page:
// $('h1, h2').each(function(index, value){ 
//  $('#local').append('<li class="child" rel="2"><a href="#anchor-'+index+'">'+$(this).html()+'</a></li>'); 
//  $(this).html('<a name="anchor-'+index+'">'+$(this).html()+'</a>');
// })
//
// Liste des principaux selecteurs:
//
// :root
// :empty
// :not(selector)
// :link
// :visited
// :active
// :hover
// :enabled
// :disabled
// :checked
// :focus
// :first-letter
// :first-line
// :first-child
// :first-of-type
// :last-of-type
// :only-of-type
// :only-child
// :nth-child(n)
// :nth-last-child(n)
// :nth-of-type(n)
// :nth-last-of-type(n)
// :last-child
// :before
// :after
// ::selection
//
// Source: http://www.gtro.net/jquery/selectors.php
//
// 2) Dans le répertoire exo-2, vous trouverez une page HTML qui utilise la librairie Bootstrap.
// Dans le fichier script.js, écrivez des sélecteurs permettant de sélectionner les éléments suivants ( un sélecteur par ligne ) : 
// Par exemple, si je dis sélectionner tous les éléments h4 de la page, le sélecteur associé est : $('h4'). 
//
// 
// i) Sélectionner le titre du blog : "John's Blog".

$('#title');
$("body>[title*='John']");


// ii) Sélectionner tous les éléments du sidemenu de gauche.

//$("body.ul.li");
$('.nav');

// iii) Sélectionner le footer.

$('<footer>');

// iv) Sélectionner l'élément qui permet de faire la barre de recherche.

$(".input-group");

// v) Sélectionner tous les glyphicons de la page.

$('.glyphicon*');

//$('.glyphicon');

// vi) Sélectionner tous les labels verts.

$('.label-success');

// vii) Sélectionner tous les paragraphes qui ont comme classe 'intro'.

$(".intro")
// Intro ? Pas trouvé !
//$('.intro'>["title~=intro"]);

// viii) Sélectionner toutes les images avec toutes les icones dont la classe est 'glyphicon-time'

$('img, *.glyphicon-time');

// ix) Sélectionner le premier élément du sidemenu.

$('li:first-child');
//$('.nav:first li');
$('.nav:first li:first-child');
$('.nav>li:first-child');

// x) Bonus : sélectionner un paragraphe sur deux.

$("p:even");

$('p').each(function(index, value){ 
    if (index % 2 === 0) {
        console.log(index);

        $('#local').append('<li class="child" rel="2"><a href="#anchor-'+index+'">'+$(this).html()+'</a></li>'); 
        $(this).html('<a name="anchor-'+index+'">'+$(this).html()+'</a>');  
    }

 })

 





