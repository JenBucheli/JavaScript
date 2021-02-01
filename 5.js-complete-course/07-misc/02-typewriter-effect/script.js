/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


    let text= document.getElementById("target").innerText;
    //let text= "Hello friends and family"
    let i= 0;
    let speed=50;
    target.innerText="";
    //let splitText= text.split()


    function moving (){


        if (i < text.length) {
            target.innerText += text.charAt(i);
            i++;
            setTimeout(moving, speed);
        }

    }
moving();
