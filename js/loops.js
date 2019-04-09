(function(){
    "use strict";

// "While loops"

// var i = 1;

// while(i <= 100) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
//     i++;
// }
//
//
//     function squareOfNumber(a) {
//         return a * a;
//     }
//
// while (i < 11) {
//     console.log(squareOfNumber(i));
//     i++;
// }

// "Do-While loops"

// var i = 1;

// // do {
// // //     console.log("the number is " + i);
// // //     i++
// // // } while (i <= 25);

// var x = 100;
//
// do {
//     console.log(x);
//     x -= 10;
// } while (x >= -50) ;

//     Fizz Buzz: log all numbers from 1 - 100
// –    if divisible by 3 log “Fizz"
// –    if divisible by 5 log “Buzz"
// –    if divisible by 3 and 5 log “FizzBuzz”
// –    else, log the current number



    for(var i = 1; i < 100; i++){
        if(i % 15 === 0) console.log("FizzBuzz");
        else if(i % 5 === 0) console.log("Buzz");
        else if(i % 3 === 0) console.log("Fizz");
        else console.log(i);
    }



})();