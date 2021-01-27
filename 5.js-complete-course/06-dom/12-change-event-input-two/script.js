/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    //adding the input field by ID
    let input= document.getElementById("pass-one");
    //adding the counter Span by ID
    let ok= document.getElementById("validity");



    input.addEventListener("input",function (){

        if ( (input.value.length>7) ||  (input.value.match(/[a-z]/g))  || (input.value.match(/[A-Z]/g)))
            {
                //find a way to print ok once I have 8 characters with numbers and letters
                ok.innerText = "ok";

        }


})




})();
