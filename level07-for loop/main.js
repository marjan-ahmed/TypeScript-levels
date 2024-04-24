"use strict";
let alarmTiming = 5; //AM
let awaikingTime = 6; //AM
if (alarmTiming < awaikingTime) {
    for (let i = 0; i < 5; i++) {
        console.log(i, "Waik Up! It has been more then 5'O Clock");
    }
}
else {
    console.log("Nice! You're a responsible person!");
}
;
// Statement No.1 = Inside the for loop initializa a variable with the value of 0.(mostly x) E.g: for(let x = 0)
// Statement No.2 = Than how much time do you want the number to be appeared but the variable (x) be less then the number E.g: for(let x = 0; x < 5)
// Statement No.3 (increment Operator) =  Make an increment of adding or loosing the loop by i++ (adding) and i-- (loosing). E.g: for(let x = 0; x 5; i++/i--)
// And than write your object.
