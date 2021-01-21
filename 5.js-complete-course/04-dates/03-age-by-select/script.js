/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", function () {

        let nowYear = new Date().getFullYear();
        let nowMonth = new Date().getMonth();
        let nowToday = new Date().getDay();

        let birthYear = document.getElementById("dob-year").value;
        let birthMonth = document.getElementById("dob-month").value;
        let birthDay = document.getElementById("dob-day").value;

        let age = nowYear - birthYear;

        if ( nowMonth +1 < birthMonth || (nowMonth +1 === birthMonth && nowToday < birthDay))
            age--;

        alert("You are " + age + " years old.");

    })


    // your code here

})();
