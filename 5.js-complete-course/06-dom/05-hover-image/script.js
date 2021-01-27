/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let emoji= document.getElementsByTagName("img")[0];
    //we use index 0 because the images to work with, are all inside the same "img tag"

    let hover= emoji.getAttribute("data-hover");

    let notHover= emoji.getAttribute("src");



    emoji.addEventListener("mouseover", function () {
        emoji.setAttribute ("src", hover)
    })

    emoji.addEventListener("mouseleave", function () {
        emoji.setAttribute ("src", notHover)
    })

})();
