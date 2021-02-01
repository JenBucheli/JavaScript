/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value
    let first = document.getElementById("op-one").value;
    let second = document.getElementById("op-two").value;
    document.getElementById("addition").addEventListener("click", function() {
        // perform an addition
        first = document.getElementById("op-one").value;
        second = document.getElementById("op-two").value;
        //console.log(typeof first);
     })

    document.getElementById("subtraction").addEventListener("click", function() {
        // perform a subtraction
        first = document.getElementById("op-one").value;
        second = document.getElementById("op-two").value;
        alert(parseInt(first) - parseInt(second));
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        // perform an multiplication
        first = document.getElementById("op-one").value;
        second = document.getElementById("op-two").value;
        alert(first * second);
    });

    document.getElementById("division").addEventListener("click", function() {
        // perform an division
        first = document.getElementById("op-one").value;
        second = document.getElementById("op-two").value;
        alert(parseInt(first) / parseInt(second));
    });
})();
