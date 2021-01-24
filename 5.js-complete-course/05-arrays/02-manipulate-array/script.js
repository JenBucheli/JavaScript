/* becode/javascript
 *
 * /05-arrays/02-manipulate-array/script.js - 5.2: manipulation de tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    const fruits = [
        "pomme \n",
        "poire \n",
        "fraise \n",
        "tomate \n",
        "orange  \n",
        "mandarine \n",
        "durian \n",
        "pêche \n",
        "raisin \n",
        "cerise \n",
    ];
    let start= fruits.shift() && fruits.unshift("banana, \n");
    let end=fruits.pop() && fruits.push("kiwi");

    document.getElementById("run").addEventListener("click",()=> {
        alert(fruits)
    })


    // your code here

})();
