/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    document.getElementById("run").addEventListener("click", function() {

       let numbers=[];

        let table = document.querySelectorAll("td");

        for (let i=0; i< table.length; i++){

           arrayNum = Math.floor(Math.random() * 100)+1;
           table[i].innerHTML= arrayNum;
           numbers.push(arrayNum)

        }

       let min= Math.min(...numbers);
       let max= Math.max(...numbers);
       let sum= numbers.reduce((a,b) => a + b,0);
       let avrg= sum/numbers.length;

       document.getElementById("min").innerHTML= min;
       document.getElementById("max").innerHTML= max;
       document.getElementById("sum").innerHTML= sum;
       document.getElementById("average").innerHTML=avrg;

    });


})();
