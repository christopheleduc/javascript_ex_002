console.log("exercice 8");


$("#right").click(function() {
var currentLeft = parseInt($('.items').css('left'));
$('.items').css('left', (currentLeft - 800) + 'px');
})

$('#left').click(function() {
var currentLeft = parseInt($('.items').css('left'));
$('.items').css('left', (currentLeft + 800) + 'px');
})

$(document).ready(function(){ //ecoute
    $("#Submit_01" ).click(function(e) { //attend clic submit
        var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i; // RegHex Test Mail.
        let user=$('#InputEmail_01').val(); // prend valeur input mail
        var pass=$('#InputPass_01').val(); // prend valeur input password
    if (user.length > 0 && pass.length > 5) { // 6 caractères minpour le password
        if (testEmail.test(user)){ // On test la validité de l'E-Mail
            var strMD5 = $().crypt({ // On ne stock JAMMAIS un mot de pass; on le hash et on le stock, en general dans une BDD, pour verif ulterieur
                method: "sha1",
                source: pass
            })
            if (user=='hello@me.com' && strMD5=='3d4b1eb1242d72e794baa62585277057a75ba176'){
                $.alert({theme:'supervan', title: 'Alert!', content: 'Vous êtes connecté !',});
            } else {
                    console.log("L'utilisateur est: [ "+user+" ] / Le Hash (SHA1) de [ " + pass + " ] est: [ " + strMD5 + " ]"); // Affiche le USER, le PASSWORD et le HASH dans la console
                    alert( 'User : '+user+' / Hash (SHA1) du mot de pass : '+strMD5); // Affiche le USER et le HASH dans le DOM
                    }
                } else { // Sinon ALERT !!!
                    $.alert({theme:'modern', title: 'Alert!', content: 'Please you need to enter a VALID email !!!',}); // on dit: "ça suffit maintenant!!!
                }      
        }
    else if (user.length == 0 && pass.length == 0) { // verifie qu'on fait pas n'importe koi...
        //$('#alertMessages').replaceWith('<div class="alert alert-warning" role="alert">Please enter your email adress !</div>');
        $.alert({theme:'modern', title: 'Alert!', content: 'Please you need to enter an email adress !',}); // on dit: "ça suffit maintenant!!!
        }
    else if ( user.length > 0 && pass.length < 6 ) { // verifie qu'on fait pas n'importe koi encore!
        //$('#alertMessages').replaceWith('<div class="alert alert-warning" role="alert">Please enter six character min for the password please! !</div>');
        $.alert({theme:'modern', title: 'Alert!', content: 'Enter six characters min for the password please !',}); // Faut pas pousser mamie dans les orties non-plus!!!
        }
    else { // Est-il bien utile d'en arriver à de tels extreme ?
        //$('#alertMessages').replaceWith('<div class="alert alert-warning" role="alert">Please enter your email adress !</div>');
        $.alert({theme:'supervan', title: 'Alert!', content: 'Please you MUST enter your email adress AND the password !',}); // Là je déprime !!!
        }
    });
});

