console.log("exercice 4");


// 1) si l'utilisateur clique sur le bouton 'signup' alors lancer une alerte pour lui dire : "Merci nous vous tiendrons informé des différentes offres";

// Bonne réponse (décommanter le code pour l'executer)!!!:

// $( ".btn-danger" ).click(function() {
//     alert( "Merci nous vous tiendrons informé des différentes offres" );
//   });

// 2) récupérer maintenant le contenu de l'input pour adapter votre message : 
// "Merci adresse email rentrée, nous vous tiendrons informé des différentes offres`;


// $( ".btn-danger" ).click(function() {
//     alert( "Merci nous vous tiendrons informé des différentes offres" );
//   });

// $(document).ready(function(){
//     var mail = $(".form-control").val();
//     alert(mail);
// });


$(document).ready(function(){
    $(".btn-danger").click( function(){ 
        alert( "Merci "+$(".form-control").val()+" nous vous tiendrons informé des différentes offres");
    })
});

// 3) si l'utilisateur double clique sur l'onglet 'Produits' alors cacher l'onglet 'Produits';

$('.nav.navbar-nav:not(.navbar-right) li:last-child').on('dblclick', function(e) {
    $(this).empty();
});

// 4) si l'utilisateur clique sur une image alors changer le bouton 'Cart' en haut à droite pour 
// marquer le fait qu'un produit a été ajouté au panier. S'il clique deux fois on doit avoir le texte Cart(2);

//  $( '.navbar-right li:last-child' ).click(function() {
//      alert( "1 clika" );
//    });

// $( '.navbar-right li:last-child' ).on('dblclick', function() {
//     alert( "2 clics" );
// });

$('.navbar-right li:last-child').click(function (e) {
    var $this = $(this);
    if ($this.hasClass('clicked')){
        $this.removeClass('clicked'); 
        alert("Double click");
        //here is your code for double click
        $this.replaceWith('<li><a href="#"><span class="glyphicon glyphicon-shopping-cart"></span> Cart 2</a></li>');
    }else{
        $this.addClass('clicked');
        setTimeout(function() { 
            if ($this.hasClass('clicked')){
                $this.removeClass('clicked'); 
                alert("Just one click!");
                //your code for single click
                $this.replaceWith('<li><a href="#"><span class="glyphicon glyphicon-shopping-cart"></span> Cart 1</a></li>');              
            }
        }, 500);          
    }
});

// 5) un site ecommerce traque la position de la souris pour savoir si vous êtes intéréssés par un produit. 
// Affichez dans la console 'L'utilisateur regarde ' + le nom du produit si la souris est au dessus d'une image de produit. 
// Vous pouvez ajouter des ids sur les images dans la page HTML. Bonus: faire de même sans utiliser les ids;

// On vérifie tout le temps
// $("#big-mother01").hover(
//     function() { $.data(this, 'hover', true); },
//     function() { $.data(this, 'hover', false); },
// ).data('hover', false);
 
// On peut, du coup, vérifier à chaque fois si la souris est sur l'élément
// if ($("#big-mother01").data('hover'))
//     alert("Hovered!");

 
 
function addEvent(obj,event,fct)
{
        if( obj.attachEvent)
                obj.attachEvent('on' + event,fct);
        else
                obj.addEventListener(event,fct,true);
}

addEvent(document.getElementById('bouton_click'),'click',onclick_page);