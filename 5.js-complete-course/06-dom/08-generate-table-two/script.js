/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    //create elements that the table needs
    let table=document.createElement("table");



    //add table inside the element <div> from the HTML through the <div>'s ID
    document.getElementById("target").appendChild(table);

    //create amount of rows and tables, depending of the multiplication table.

    for (let r=0;r<10;r++) {
        let rows= document.createElement("tr");
            table.appendChild(rows);

            for (let c=0;c<10;c++) {
        let columns = document.createElement("td");

        //toString show mathematical operations
            //.innerText shows results on the body of the HTML
        columns.innerText=((r+1)*(c+1)).toString();

        //rows contain columns, think about a table graphic
                rows.appendChild(columns);

    }}













    // your code here

})();
