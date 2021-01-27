/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
  //adding the input field by ID
  let input= document.getElementById("pass-one");
  //adding the counter Span by ID
  let counter= document.getElementById("counter");

  // adding condition to avoid more text after the 10 characters with "slice array"

    input.addEventListener("input",function (){
      while (input.value.length>10){
       input.value = input.value.slice(0,10);
  }
  //Connecting counting of characters from the input with the counter.
    counter.innerText=input.value.length+ "/10"
    })

})();
