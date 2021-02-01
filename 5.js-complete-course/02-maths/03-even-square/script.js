/* becode/javascript
 *
 * /02-maths/03-even-square/script.js - 2.3: carrés des pairs
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.



(function() {


    document.getElementById("run").addEventListener("click", function() {

        // your code here
      let squareNumbers= [];

        for (let i= 1; i<=21;i++) {
            // if I get the square root of i (numbers 1-21), figure out if it's a whole number.
            //% gives me the rest of the division to identify "whole" numbers.
            if (Math.sqrt(i)%1===0) // is divided by zero because we are dividing numbers between 1-21 by 1 to avoid that the residual is a decimal.
                {
                // put the founded number in the array
                squareNumbers.push(i);   //takes an argument
            }


        }
        //to then show them in the array.
        alert(squareNumbers);


    });

})();