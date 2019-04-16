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

// Contrôles:

// 1. vérifiez que le champ email est non vide. Si ce n'est pas le cas, 
// afficher une div avec la classe bootstrap 'alert alert warning' en précisant dedans le texte email obligatoire;
// 2. vérifiez la même chose pour le champ mot de passe;
// 3. ajoutez un contrôle supplémentaire sur le champ mot de passe pour obliger l'utilisateur 
// à rentrer au minimum 6 lettres. Ajustez le message en fonction;
// 4. vérifiez maintenant que le champ email comporte bien une adresse email, sinon afficher un message à l'utilisateur. 
// ( Remarque : il va falloir trouver comment vérifier qu'une chaine de charactères est un email... google est votre ami... );



$(document).ready(function(){ //ecoute
    $("#Submit_01" ).click(function(e) { //attend clic submit
        var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i; // RegHex Test Mail.
        let user=$('#InputEmail_01').val(); // prend valeur input mail
        var pass=$('#InputPass_01').val(); // prend valeur input password
    if (user.length > 0 && pass.length > 5) { // 6 caractères minpour le password
        if (testEmail.test(user)){ // On test la validité de l'E-Mail
            var strMD5 = $().crypt({ // On ne stock JAMMAIS un mot de pass; on le hash et on garde la clé publique pour verif ulterieur
                method: "sha1",
                source: pass
            })
                console.log("L'utilisateur est: [ "+user+" ] / Le Hash (SHA1) de [ " + pass + " ] est: [ " + strMD5 + " ]"); // Affiche le USER, le PASSWORD et le HASH dans la console
                alert( 'User : '+user+' / Hash (SHA1) du mot de pass : '+strMD5); // Affiche le USER et le HASH dans le DOM
            } else { // Sinon ALERT !!!
                $.alert({theme:'modern', title: 'Alert!',content: 'Please you need to enter a VALID email !!!',}); // on dit: "ça suffit maintenant!!!
            }
        }
    else if (user.length == 0 && pass.length == 0) { // verifie qu'on fait pas n'importe koi...
        //$('#alertMessages').replaceWith('<div class="alert alert-warning" role="alert">Please enter your email adress !</div>');
        $.alert({theme:'modern', title: 'Alert!',content: 'Please you need to enter an email adress !',}); // on dit: "ça suffit maintenant!!!
        }
    else if ( user.length > 0 && pass.length < 6 ) { // verifie qu'on fait pas n'importe koi encore!
        //$('#alertMessages').replaceWith('<div class="alert alert-warning" role="alert">Please enter six character min for the password please! !</div>');
        $.alert({theme:'modern', title: 'Alert!',content: 'Enter six characters min for the password please !',}); // Faut pas pousser mamie dans les orties non-plus!!!
        }
    else { // Est-il bien utile d'en arriver à de tels extreme ?
        //$('#alertMessages').replaceWith('<div class="alert alert-warning" role="alert">Please enter your email adress !</div>');
        $.alert({theme:'supervan', title: 'Alert!',content: 'Please you MUST enter your email adress AND the password !',}); // Là je déprime !!!
        }
    });
});

// var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;


// if (testEmail.test(user)){
        
// }

// if (testEmail.test(valueToTest))
//     // Do whatever if it passes.
// else
//     // Do whatever if it fails.
