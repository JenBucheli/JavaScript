/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let target= document.getElementById("target");
    let btnOne= document.getElementById("part-one");
    let btnTwo=document.getElementById("part-two");
    let btn3=document.getElementById("part-three");
    let btn4=document.getElementById("part-four");

    function result (){
        let targetResult= ["0",btnOne.innerText, btnTwo.innerText, btn3.innerText,btn4.innerText];
        target.innerText= targetResult.join("");
    }

     btnOne.addEventListener("click", function  () {

         btnOne.innerText = String((parseInt(btnOne.innerText) + 1));
         if (btnOne.innerText > btnOne.getAttribute("data-max")) {
             btnOne.innerText = btnOne.getAttribute("data-min");
         }
         result()

     })



    btnTwo.addEventListener("click", function  () {


        btnTwo.innerText = String((parseInt(btnTwo.innerText) + 1));
        if (btnTwo.innerText > btnTwo.getAttribute("data-max")) {
            btnTwo.innerText = btnTwo.getAttribute("data-min");

        }

        if(btnTwo.innerText<10){
            btnTwo.innerText="0"+btnTwo.innerText
        }
        result()

    })
    btn3.addEventListener("click", function  () {


        btn3.innerText = String((parseInt(btn3.innerText) + 1));
        if (btn3.innerText > btn3.getAttribute("data-max")) {
            btn3.innerText = btn3.getAttribute("data-min");

        }

        if(btn3.innerText<10){
            btn3.innerText="0"+btn3.innerText
        }
        result()

    })
    btn4.addEventListener("click", function  () {


        btn4.innerText = String((parseInt(btnTwo.innerText) + 1));
        if (btn4.innerText > btn4.getAttribute("data-max")) {
            btn4.innerText = btn4.getAttribute("data-min");

        }

        if(btn4.innerText<10){
            btn4.innerText="0"+btn4.innerText
        }
        result()

    });

})();
