/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to change the content of a tag:
    let d = new Date();
    let day=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let month=["January","February","March","April","May","June","July","August","September","October","November","December"];

    document.getElementById("target").innerHTML= day[d.getDay()] +" "+ d.getDate() +" "+ month[d.getMonth()] + " "+d.getFullYear() + "," +" "+ d.getHours() + "h" +d.getMinutes();


    // your code here



})();
