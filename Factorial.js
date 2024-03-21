//$ ADDITION
//# PRACTICE ROUND 1
// // Write a function that calculates the factorial of a given number. The factorial of a non-negative integer n is the product of all positive integers less than or equal to n.

// //start with the number you are given (n) and decrement by one until you reach the number 1. Then take those numbers and multiply them.
// // for loop allows me to start at a given number, and as long as it is less than or more than....then decrement by one...hmmmmm

// // function factorial(n) {
// //     let result = 1;
// //     for (let i=n; i >= 1; i--) {
// //     result *= i;
// // }
// // return result;
// // }

// // console.log(factorial(10));


// //ChatGPT helped me refactor my above attempt. But this is what ChatGPT had for its version first:
// function factorial(n) { // use "n" as a parameter
//     if (n === 0 || n === 1) { // if the given number equals 0 OR 1 ....
//         return 1; // then the result is going to be just "1"....
//     } else { // otherwise...
//         let result = 1; // the purpose of this function is to return the result of a multiplication of a bunch of numbers. So we initialize a variable called result and assign it a value of 1.
//         for (let i = 2; i <= n; i++) { // loop through all integers, starting with 2, and as long as i is less than or equal to the given number, iterate to the next number
//             // so if the user give us 10, the above for statement would be i = 2, and as long as i is <= 10....ok it is....then increment up to i = 3 now...
//             // and then result becomes 2 x 3 which is 6....and then the loop goes again...
//             //! IMPORTANT FOR ME: remember that when the loop starts again, the i = 2 is skipped....that was just initializing i....so now the loop goes to "as long as 3 <= n.... ok that is true, so keep going..." and then it increments up to 4 for the next round...etc
//             result *= i; // this line actually updates the value of "result" variable
//         }
//         return result;
//     }
// }

// // Example usage
// console.log(factorial(5)); // Output: 120

// //? So why does the loop above start at 2? Because we already know that factorials of 0 and 1 are going to be 0 and 1. So the next number to try would be 2. So, if a user enters 0 or 1, we have that handled with our first statement where we return 1. SO the next  number in line is 2, so we start iterating from 2 and go up until we hit "n", which is the user's input number.
// // What confused me this morning is, i = 2...isn't the user giving us input for the value of i? We are hijacking the value of "i" arent we? NO. The user gave us the value of "n", not "i". The value of i is just a starting point for a loop. Since we already dealt with 0 and 1, the i should be initialized at 2 so our loop will start at the least possible number the user could give us...which is 2.






//$ ADDITION
//# PRACTICE ROUND 2 on 3/21/2024 for about an hour
// Write a function that calculates the factorial of a given number. The factorial of a non-negative integer n is the product of all positive integers less than or equal to n.

//I will pretend num2 is 10
function factorial2(num2) {
    if(num2 === 0 || num2 === 1) {
        return 1;
    } 
    else {
        let result = 1;
        for (let i = 2; i <= num2; i++) //for as long as the user-provided num2 is less than 10, keep on looping through and increment up by one on the next round
        {
            result *= i;
        }        
        return result;
}
}

console.log(factorial2(10))
console.log(factorial2(4))

//Spelling it out here below with num2 equaling 10 from the user...
// first time the loop runs, "result" value is the number 1 and the value of "i" is the number 1
    //for (let i = 2; 2 <= num2 (which is true if num2 is 10); i++ (go to 3 on the next loop)){
        // result gets assigned the value of "i" times the value of result
        //for the first loop, as we said above, the value of "i" is 2 and result is 1
        //so 2 times 1 equals 2
        //the variable "result" now equals 2
// second time the loop runs, "result" value is the number 2 and the value of "i" is the number 3 (because the i++ incremented up once from 2)
// remember the loop skips the initializing of i to the value of 2....it remembers the new value of i is 3 now bc it's been incremented. So...
    // for (3 <= 10) {
        // result (which was 2 last time it was updated) *= 3 (which means 2 times 3 will be stored as the new value of "result" variable)
        // so at this point, the value of "result" is 6
    // }
// third time the loop runs, "result" value is the number 6 and the value of "i" is the number 4 (because the i++ incremented up once from 3)
    // so the for loop runs again with checking if "i" (which is now 4) is less than 10 (which it is) and then executing the curly braces
    // {result *= i} (these curly braces are executed again where result gets another new value by multiplying itself (6) by the newest value of "i" (which is 4))
    // }
// this goes on until the final loop where it checks if 11 is less than or equal to num2(which is 10)...and returns false...then it goes to return whatever the most current value of "return" is at that point.





//$ ADDITION
//# PRACTICE ROUND 3
// Write a function that calculates the factorial of a given number. The factorial of a non-negative integer n is the product of all positive integers less than or equal to n.








//$ ADDITION
//# PRACTICE ROUND 4
// Write a function that calculates the factorial of a given number. The factorial of a non-negative integer n is the product of all positive integers less than or equal to n.








