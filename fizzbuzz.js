// function checkNum (num) {
//     if (num % 3 === 0 && num % 5 === 0)
//     {
//         console.log("fizzbuzz")
//     }
//     else if (num % 3 === 0)
//     {
//         console.log("fizz")
//     }
//     else if (num % 5 === 0)
//     {
//         console.log("buzz")
//     }
//     else console.log(num)
// }

// //if statements for if div by both 3 and 5 print fizzbuzz
// //if 3, fizz
// //if 5, buzz
// //if neither print the number itself

// function checkNumber (num1) {
//     if (num1 % 3 === 0 && num1 % 5 === 0) // if the given integer has a remainder of zero when divided by 3 AND a remainder of zero when divided by 5, then log fizzbuzz
//     {
//         console.log("fizzbuzz")
//     }
//     else if (num1 % 3 === 0)
//     {console.log("fizz")}
//     else if (num1 % 5 === 0)
//     {console.log("buzz")}
//     else console.log(num1)
// }

// checkNum(25)
// checkNumber(14)
// checkNumber(50)
// checkNumber(9)


// //VERSION 1 OF FIZZBUZZ:
// //write a function that prints "fizz" if a given number is divisble by 3 with no remainder, or prints "buzz" by both 3 and 5 print fizzbuzz
// //if 3, fizz
// //if 5, buzz
// //if neither print the number itself


// //VERSION 2 OF FIZZBUZZ:
// // print numbers from 1 to 100, but here’s the catch, multiple of three should print “Fizz” and similarly print “Buzz” for multiples of 5 and lastly print “FizzBuzz” for multiples of three and five.
// //TWO POSSIBLE SOLUTIONS:
//     //1. We can use a for loop that iterates over a variable i that increments up to 100
//     //2. We can create a function that takes a parameter and uses if statements paired with console.logs
// for (let i = 1; i <= 100; i++) {
//     // Check if the number is a multiple of both 3 and 5 first
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     } 
//     // Check if the number is a multiple of 3
//     else if (i % 3 === 0) {
//         console.log("Fizz");
//     } 
//     // Check if the number is a multiple of 5
//     else if (i % 5 === 0) {
//         console.log("Buzz");
//     } 
//     // If none of the above conditions are met, simply print the number
//     else {
//         console.log(i);
//     }
// }


// //@ THIRD time practicing fizzbuzz question: date 3/12/2024
// //VERSION 2 OF FIZZBUZZ:
// // print numbers from 1 to 100, but here’s the catch, multiple of three should print “Fizz” and similarly print “Buzz” for multiples of 5 and lastly print “FizzBuzz” for multiples of three and five.
// //TWO POSSIBLE SOLUTIONS:
//     //1. We can use a for loop that iterates over a variable i that increments up to 100
//     //2. We can create a function that takes a parameter and uses if statements paired with console.logs


// for (let i = 0; i < 101; i++)
//     if (i % 3 === 0 && i % 5 ===0) {
//         console.log("I am number " + i + " and I am evenly divisbile by both 3 and 5: " + "fizzBuzz!!!")
//     }
//     else if (i % 3 === 0) {
//         console.log("I am number " + i + " and I am evenly div only by 3: " + "fizz")
//     }
//     else if (i % 5 === 0) {
//         console.log("I am number " + i + " and I am evenly div only by 5: " + "buzz Buzz BUZZ!!!")
//     }
//     else{console.log("I am number " + i + " and I am not evenly div by three or five")
//     }
    

// //@ FOURTH time practicing fizzbuzz question: date XXXXXX
// //VERSION 2 OF FIZZBUZZ:
// // print numbers from 1 to 100, but here’s the catch, multiple of three should print “Fizz” and similarly print “Buzz” for multiples of 5 and lastly print “FizzBuzz” for multiples of three and five.
// //TWO POSSIBLE SOLUTIONS:
//     //1. We can use a for loop that iterates over /a variable i that increments up to 100
//     //2. We can create a function that takes a parameter and uses if statements paired wi/th console.logs

// for (let i = 1; i < 101; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("I am number " + i + " and I am evenly divisible by both 3 and 5! FIZZBUZZ!")
//     }
//     else if (i % 3 === 0) {
//         console.log("I am number " + i + " and I am evenly divisible by 3 only! Fizz!")
//     }
//     else if (i % 5 === 0) {
//         console.log("I am number " + i + " and I am evenly divisible by 5 only... Buzz!")
//     }
//     else (console.log(i + " is not evenly divisible by 3 or 5"))
// }

// //^ ANOTHER WAY TO SOLVE
// for (let i = 0; i < 100;) console.log((++i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || i)
// // loop through using numbers 0 through 100 and, on each loop, console log the previous number plus one and divide by 3, and if not true then 


// //@ FIFTH time practicing fizzbuzz question: date 3/14/2024
// //VERSION 2 OF FIZZBUZZ:
// // print numbers from 1 to 100, but here’s the catch, multiple of three should print “Fizz” and similarly print “Buzz” for multiples of 5 and lastly print “FizzBuzz” for multiples of three and five.
// //TWO POSSIBLE SOLUTIONS:
//     //1. We can use a for loop that iterates over /a variable i that increments up to 100
//     //2. We can create a function that takes a parameter and uses if statements paired wi/th console.logs

// for (var i = 0; i < 101; i++) {
//     if (i % 5 === 0 && i % 3 === 0) {
//         console.log("I am number " + i + " and I say fizzbuzz")
//     }
//     else if (i % 5 === 0 ) {
//         console.log("I am number " + i + " and I say buzz")
//     }
//     else if (i % 3 === 0 ) {
//         console.log("I am number " + i + " and I say fizz")
//     }
//     else {console.log(i)}
// }


//^ Let's use the "Or" operator and practice

function checkNum (i) {
    if (i % 5 === 0 && i % 3 === 0) {
        console.log("I am number " + i + " and I say fizzbuzz")
    }
    else if (i % 5 === 0 || i % 3 === 0) {
        console.log("I am number " + i + " and I am div by either 3 or 5...guess which one!")
    }
    else {console.log("I am number " + i + " and I have nothing to do with 3's or 5's")}
}
checkNum(15);
checkNum(5);
checkNum(17);


//@ SIXTH time practicing fizzbuzz question: date 3/14/2024
//VERSION 2 OF FIZZBUZZ:
// print numbers from 1 to 100, but here’s the catch, multiple of three should print “Fizz” and similarly print “Buzz” for multiples of 5 and lastly print “FizzBuzz” for multiples of three and five.
//TWO POSSIBLE SOLUTIONS:
    //1. We can use a for loop that iterates over /a variable i that increments up to 100
    //2. We can create a function that takes a parameter and uses if statements paired wi/th console.logs