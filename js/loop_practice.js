

/**        while (condition) {
            // code block to be executed
        }   */


// var i = 1;
// while (i <= 82) {
//     if (i % 4 === 0){
//         console.log(i);
//     }
//     i++;
// }


/**            do {
                // code block to be executed
            }
            while (condition);  */


// var x = 1000000;
//
// do {
//     console.log(x);
//     x -= 50000
// } while (x >= 0);¡


/**    for (statement 1; statement 2; statement 3) {
         //code block to be executed
    }

Statement 1 is executed (one time) before the execution of the code block.

Statement 2 defines the condition for executing the code block.

Statement 3 is executed (every time) after the code block has been executed.    */


// var i;
// for (i = 0; i <= 10; i++){
//     console.log(i);
// }

// var x;
// for (x = 100; x >= 0; x -= 25) {
//     console.log(x);
// }

function isEvenOdd(num) {
    if (num % 2 === 0){
        return num + " is even."
    } else {
        return num + " is odd."
    }
}

var i;
for (i = 1; i <= 99; i++) {
    console.log (isEvenOdd(i))
}


