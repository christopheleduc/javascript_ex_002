console.log("exercice 6");


// 1) créez un formulaire en HTML avec un champ pour un email et un champ pour un mot de passe. Ajouter un bouton avec le titre 'Se connecter';

// 2) nous voulons contrôler les données lorsque l'utilisateur clique sur le bouton 'Se connecter'.
// Faites en sorte de réagir à cet événement en utilisant un alert dans un premier temps;

//  $(document).ready(function(){
//      $("#Submit_01").click( function(){ 
//          alert( "Connexion !");
//      })
//  });

// 3) nous devons maintenant récupérer les valeurs des champs email et mot de passe dans la fonction déclenchée 
// par l'événement (et donc appelée) déclaré à la question précédente. Ecrivez du code JQuery permettant de récupérer la valeur de ces inputs. 
// Affichez ces valeurs dans la console dans un premier temps.


$(document).ready(function(){
    $("#Submit_01" ).click(function(e) {
    //$('#debug').empty();
    
    let user=$('#InputEmail_01').val();
    var pass=$('#InputPass_01').val();

    if (user.length == 0) {
        //$('#dvValue').html('Please enter something');
        alert('Please enter your email adress');
    }
    if (pass.length == 0) {
        //$('#dvValue').html('Please enter something');
        alert('Please enter something');
    } else {
    var strMD5 = $().crypt({
        method: "sha1",
        source: pass
    });
    console.log("SHA1 string of <b>" + pass + "</b> is <b>" + strMD5 + "</b>");
    }
    //if(auteur != '' && editeur != 'Aucun')
    console.log( 'User : '+user+' / Password : '+pass);
    alert( 'User : '+user+' / Password : '+pass+' / SHA1 : '+strMD5);
      });
});
