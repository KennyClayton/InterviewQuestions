
// ### Challenge 1: Hello, JavaScript!
// Write a program that prints "Hello, JavaScript!" to the console.
var greeting = "Hello, Javascript";
console.log("1. ", greeting);

// ### Challenge 2: Addition
// Write a function that takes two parameters and returns their sum.
function sumNumbers (num1, num2)
{
    return (num1 + num2);
}
console.log("2. ", sumNumbers(5,2));



// ### Challenge 3: Even or Odd
// Write a function that takes a number as a parameter and returns whether it's even or odd.
function thisOrThat (num) {
    if (num % 1 === 0)
    {
        return "Odd"
    }
    return "Even"
}
console.log(thisOrThat(47))

function oddOrEven (randomNum)
{
    if (randomNum % 2 === 0) //if 2 mod 2 is zero then it's even...2 mod 2 means there is ZERO left over after dividing 2 by 2...so 26 mod 2 is zero because divides evenly and has no leftover value at all.
    {
        return "even"
    }
    return "odd" //...otherwise, if there is any leftover value beyond a whole integer of zero, we'll display "odd"
}
console.log(oddOrEven(1));
console.log(oddOrEven(2));
//& So we learned that using MODULO operator is helpful to see if a user-provided number is even or odd. How? By using modulo and "2" to test whether the given number is evenly divisible by it's self

// ### Challenge 4: Factorial
// Write a function that calculates the factorial of a given number. The factorial of a non-negative integer n is the product of all positive integers less than or equal to n.


// ### Challenge 5: Palindrome
// Write a function that checks whether a given word is a palindrome (reads the same backward as forward).


// ### Challenge 6: FizzBuzz
// Write a program that prints the numbers from 1 to 100. But for multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz." For numbers that are multiples of both three and five, print "FizzBuzz."
// for (let i = 0; i <= 100; i++) {
//     console.log("Number", i)
// }
for (let i = 1; i <= 100; i++) {
    // Check if the number is a multiple of both 3 and 5
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } 
    // Check if the number is a multiple of 3
    else if (i % 3 === 0) {
      console.log("Fizz");
    } 
    // Check if the number is a multiple of 5
    else if (i % 5 === 0) {
      console.log("Buzz");
    } 
    // If none of the above conditions are met, print the number itself
    else {
      console.log(i);
    }
  }
  

// ### Challenge 7: Maximum Number
// Write a function that takes an array of numbers as a parameter and returns the maximum number in the array.
function findMaxNum (numbers) {
    if (numbers.length === 0)
    {
        return "The array is empty."
    }
    let maxNumber = numbers[0];

for (let i = 1; i < numbers.length; i++){
    if (numbers[i] > maxNumber) {
        maxNumber = numbers[i];
    }
}

    return maxNumber
}
console.log(findMaxNum([1,3,17,286]))

// ### Challenge 8: Reverse String
// Write a function that takes a string as a parameter and returns the reversed string.
function reversedString (param) {
    return param.split(" ").reverse().join(" ");
}
console.log(reversedString("The hay is in the barn"));

// ### Challenge 9: Sum of Array
// Write a function that takes an array of numbers as a parameter and returns the sum of all the numbers in the array.

// ### Challenge 10: Prime Number
// Write a function that checks whether a given number is a prime number.

