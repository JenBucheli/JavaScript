/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let table=document.createElement("table");


    document.getElementById("target").appendChild(table);
    //appendChild puts the element I create (tables) inside the existing element (div, target)
    //tr and td I have to put them inside the table , not div!!

    for (let r=0;r<10;r++)
    {
        //add rows inside table
        table.appendChild(document.createElement("tr"));

        //for(let c=0;c<clm;c++)
        //table+="/tr";
    }





})();
