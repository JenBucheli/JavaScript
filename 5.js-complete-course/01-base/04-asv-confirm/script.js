/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.



let positive;
do{
    let age=prompt ("What is your age?");
    let gender=prompt("Define your gender");
    let town=prompt("Which town are you from?")


    positive=confirm(age+'\n'+gender+'\n'+town);
}
while (!positive); //return process of do and then check if positive is fall then loop of do!

//how is the while loop working here?











