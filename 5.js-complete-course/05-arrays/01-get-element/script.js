/* becode/javascript
 *
 * /05-arrays/01-get-element/script.js - 5.1: élément de tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    var fruits = [
        "apple",
        "pear",
        "raspberry",
        "tomatoes",
        "kiwi",
        "banana",
        "orange",
        "mandarin",
        "durian",
        "peach",
        "grape",
        "cherry",
    ];


    let btnRun=document.getElementById("run");
    btnRun.addEventListener("click",()=>{
        alert(fruits[3] );

    })
    // your code here

})();
