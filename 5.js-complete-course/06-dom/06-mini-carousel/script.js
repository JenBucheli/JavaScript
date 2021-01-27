/* becode/javascript
 *
 * /06-dom/06-mini-carousel/script.js - 6.6: mini carousel
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    //When using addEventListener ( here goes what I want to do *"type"*, followed by a listener which can be a FUNCTION!

// connecting function with the input



   let gallery = [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];

    let icon=document.getElementsByTagName("img")[0];

    document.getElementById("next").addEventListener("click", function () {

        let index= gallery.indexOf(icon.getAttribute("src"));

        if (index<gallery.length - 1 ){

            icon.setAttribute("src",gallery[index+1])
        }
         else {
            icon.setAttribute("src",gallery[0])
        }



})






}());
