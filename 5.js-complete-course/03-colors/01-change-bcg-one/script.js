/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
let btnRed= document.getElementById("red");
let btnGreen=document.getElementById("green");
let btnYellow=document.getElementById("yellow");
let btnBlue=document.getElementById("blue");

    let btnRed.addEventListener("click",()=>{
    document.body.style.background="red";
    })
    btnGreen.addEventListener("click",()=>{
        document.body.style.background="green";
    })
    btnYellow.addEventListener("click",()=>{
        document.body.style.background="yellow";
    })
    btnBlue.addEventListener("click",()=>{
        document.body.style.background="blue";
    })
    // your code here

})();
