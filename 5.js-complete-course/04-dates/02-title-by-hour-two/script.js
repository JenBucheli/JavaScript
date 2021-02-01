/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here

    let date = new Date();

    let hours = date.getHours();
    let mins= date.getMinutes();

// IMPOrTANT consider the minutes

    if (hours===17 && mins>=30)  {

        document.getElementById("target").innerHTML = "Good Evening!";

    } else if (hours>=18) {// to follow 18h -23:59h, otherwise it'll stop at 18h.


        document.getElementById("target").innerHTML = "Good Evening!";


    } else {
        document.getElementById("target").innerHTML = "Hello!";
    }

})();




// .toString (function) hours and mins

// .padStart fills empty spaces (parameters) in hours and mins.
//parameters (2,"0")

// (value 1 how long the string needs to be, value 2 character that has to be there to fill up, beginning from the front.


// concatenate with a new variable ex. fullTime.
// parseINt convert string to number.

