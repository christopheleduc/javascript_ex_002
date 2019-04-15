console.log("exercice 4");


// 1) si l'utilisateur clique sur le bouton 'signup' alors lancer une alerte pour lui dire : "Merci nous vous tiendrons informé des différentes offres";

// Bonne réponse (décommanter le code pour l'executer)!!!:

// $( ".btn-danger" ).click(function() {
//     alert( "Merci nous vous tiendrons informé des différentes offres" );
//   });

// 2) récupérer maintenant le contenu de l'input pour adapter votre message : 
// "Merci adresse email rentrée, nous vous tiendrons informé des différentes offres`;

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

$('.navbar-right li:last-child').click(function (e) {
    var $this = $(this);
    if ($this.hasClass('clicked')){
        $this.removeClass('clicked'); 
        alert("Double click");
        $this.replaceWith('<li><a href="#"><span class="glyphicon glyphicon-shopping-cart"></span> Cart 2</a></li>');
    }else{
        $this.addClass('clicked');
        setTimeout(function() { 
            if ($this.hasClass('clicked')){
                $this.removeClass('clicked'); 
                alert("Just one click!");
                $this.replaceWith('<li><a href="#"><span class="glyphicon glyphicon-shopping-cart"></span> Cart 1</a></li>');              
            }
        }, 500);          
    }
});

// 5) un site ecommerce traque la position de la souris pour savoir si vous êtes intéréssés par un produit. 
// Affichez dans la console 'L'utilisateur regarde ' + le nom du produit si la souris est au dessus d'une image de produit. 
// Vous pouvez ajouter des ids sur les images dans la page HTML. Bonus: faire de même sans utiliser les ids;

// Affiche la position de la souris en permanence.
  console.log($( document ).on( "mousemove", function( event ) {
       $( "#watching-you" ).text( "Cibling target => " + "pageX: " + event.pageX + ", pageY: " + event.pageY );
     }));

// Affiche le produit grace aux ID (décommenter pour verifier):

    //   $(function() {
    //      $('#big-mother01')
    //      .mouseover(function() {
    //      //alert("Hovered!");
    //      $( "#big-brother" ).text( "L'utilisateur regarde: " + "ipads !" );
    //      })
    //      $('#big-mother02')
    //      .mouseover(function() {
    //      //alert("Hovered!");
    //      $( "#big-brother" ).text( "L'utilisateur regarde: " + "computers !" );
    //      })
    //      $('#big-mother03')
    //      .mouseover(function() {
    //      //alert("Hovered!");
    //      $( "#big-brother" ).text( "L'utilisateur regarde: " + "mobiles !" );
    //      })
    //      .mouseout(function() {
    //      $( "#big-brother" ).text( "L'utilisateur regarde: " + "RIEN D'INTERESSANT!!!" );
    //      });
    // });

// Affiche le produit SANS ID (cela dit, beaucoups plus simple):

    $(function(){
        $('img').hover(
            function(){
                let prod = $(this).attr('src').match(/[^.]+/);
                $( "#big-brother" ).text( "L'utilisateur regarde: " + prod );
            },
            function(){
                $( "#big-brother" ).text( "L'utilisateur regarde: " + "RIEN QUI RAPORTE DU POGNON !!!" );
            }   
         );
    }); 

// 6) maintenant, traquer si un utilisateur est en train de remplir le champ pour la newsletter. 
// Comment récupérer le fait que l'utilisateur vient de cliquer dans le champ pour rentrer son adresse
// et comment récupérer le fait que l'utilisateur a tapé quelque chose dedans ?;

// On sait que ça a cliquer dedans !!! (décommenter pour voir !):

// $(function(){
//     let dans_le_input = false;
//     $('.form-control').mousedown(
//         function(){
//             alert('On à cliqué dans le champ !!! ');
//             dans_le_input = true;
//         }  
//      );
// });

// On sait que ça écrit !!! (décommenter pour voir !):

// $(function(){
//     let on_ecrit = false;
//     $('.form-control').keydown(
//         function(){
//             //let prod = $(this).attr('src').match(/[^.]+/);
//             //$( "#big-brother" ).text( "L'utilisateur regarde: " + prod );
//             on_ecrit = true;
//             alert('On ecrit !!! ');
//         }  
//      );
// });

//Exemple d'ajout de l'évènement keypress à un champ
// $('.form-control').bind('keypress', function(e) {
//     let code = (e.keyCode ? e.keyCode : e.which);
//     //if(code == 13) { //La touche Entrée a été appuyée
//     //let code = String.charCodeAt(' '); //La variable code reçoit le chiffre ASCII.
//     let lettre = String.fromCharCode(code);
//     alert('On ecrit: ' + lettre);
    
//     });

  $(function(){
      //let dans_le_input = false;
      $('.form-control').mousedown(
          function(){
             alert('On à cliqué dans le champ !!! ');
             $('.form-control').bind('keypress', function(e) {
                 let code = (e.keyCode ? e.keyCode : e.which);
                 //if(code == 13) { //La touche Entrée a été appuyée
                 //let codeAscii = String.charCodeAt(e.keyCode ? e.keyCode : e.which); //La variable code reçoit le chiffre ASCII.
                 let lettre = String.fromCharCode(code);
                 alert('On ecrit la lettre: \"' + lettre + '\" , ' + 'qui correspond au code: \"' + code + '\" !');  
             });     
          });
     });


// 7) Bonus ++ : récupérer le nombre de produits que l'utilisateur a achetés.
// Par exemple si l'utilisateur clique sur l'image ipad alors 'Cart' doit être remplacé par 'Cart(25)' puisque l'offre correspond à 25 ipads...

// 8) Utiliser un plugin JQuery:

// Feu d'artifesse plugin:

//  $('body').keypress, function(e) {
//      let keyboard = $('body').val();
//      //if(code == 13) { //La touche Entrée a été appuyée
//      //let codeAscii = String.charCodeAt(e.keyCode ? e.keyCode : e.which); //La variable code reçoit le chiffre ASCII.
//      let frappe = String.fromCharCode(e.keyCode);
//     //  if(e.which>=0 && e.which<=272){
//     //     e.preventDefault();
//     //     keyboard+=frappe;
//     //  }
//      alert('On ecrit la lettre: \"' + keyboard );
//      //$('#target').val(keyboard);
      
//  };

let combinaison = []; // tableau pour enregister la combinaison de touches

    $('body').bind('keydown', function(e) { // Fonction (param: e)
        let code = (e.keyCode ? e.keyCode : e.charCode); // capture les codes ascii
        let lettre = String.fromCharCode(code); // retient les code converti en caracteres pour affichage éventuel
            if (code == '38' && combinaison.length == 0 || code == '38' && combinaison.length == 1 ){ // test "haut" et "bas" uniquement
                combinaison.push(code); // si oui, push dans le tableau
                    }
            if (code == '40' && combinaison.length == 2){ // test "haut" et "bas" uniquement
                combinaison.push(code); // si oui, push dans le tableau
                    }

        console.log(combinaison); // Verification/debug
            if (combinaison[0] == '38' && combinaison[1] == '38' && combinaison[2] == '40'){ // test combinaison
                console.info(code); // Verification/debug
                alert('On ecrit la lettre: \"' + lettre + '\" , ' + 'qui correspond au code: \"' + code + '\" !'); // just for fun!!!
                // Do something here !
                //console.log('combinaison'); // Verification/debug
                combinaison = []; // remet le tableau à zero si test réussit !
                    }
    }); 


// Autocompletion plugin:

 $( function() {
    var liste = [
        "Christophe",
        "Salut",
        "SHA256",
        "Hacker",
        "Maître"
    ];

    $('#recherche').autocomplete({
        source : liste
    });
});

// Confetti bouton !!!
$(function(){
    $('.btn-toto').confettiButton({
        hoverOnly: true
    });
});
