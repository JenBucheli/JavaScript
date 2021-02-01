
/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    let btnRun=document.getElementById("run");


    btnRun.addEventListener("click",()=>{
        let color= "#";
        color+=Math.random().toString(16).slice(2,8);
        // to String converts stuff to string, it represents the Hexadecimal value for colors.

        document.body.style.background=color;
    })

})();
