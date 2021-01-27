/* becode/javascript
 *
 * /06-dom/10-match-password-two/script.js - 6.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    //add HTML's button to JS
    document.getElementById("run").addEventListener("click", function (){

//add pass from HTML to JS
        let pass1= document.getElementById("pass-one");
        let pass2=document.getElementById("pass-two");

        //IMPORTANT add .value to get the context of the input!!
        if (pass1.value===pass2.value) {
            alert("WELCOME!")
        }
        else {
            //could use classList as well
            //Difference .classname is safe when we won't use any other classes, otherwise it'll swipe the previous classes.
            //classList can add or remove a class without affecting any other classes the element may have

            pass1.className+= "error";
            pass2.className+= "error";
        }
    })

})();
