//$ PALINDROME
//# PRACTICE ROUND 1
//~ I am using a variable here to hold the value of the reversed word, then i write an if statement referencing that variable
// // Check if a string is a palindrome: Write a function to determine whether a given string is a palindrome or not. The function should return true if the input string is a palindrome, and false otherwise.

// // .split("").reverse("").join("")

// function checkPal(val) {
//   let newVal = val.split("").reverse().join(""); //means split up each letter into its own string since no space between each one, then reverse the order of each those letters, then join those letters back into a single string
//   if (newVal === val) {
//     return "Yes, the word " + val + " is a palindrome!";
//   }
//   return "No, the word " + val + " is NOT a palindrome!";
// }

// console.log(checkPal("reacecar"));
// console.log(checkPal("racecar"));


//$ PALINDROME
//# PRACTICE ROUND 2 on 3/23/2024
//~ I did not use a variable this time; I did manually return true or false
// Check if a string is a palindrome: Write a function to determine whether a given string is a palindrome or not. The function should return true if the input string is a palindrome, and false otherwise.
function palindrome2 (word) {
  if (word.split('').reverse().join('') == word) {
    return true;
  }
  return false;
}

console.log(palindrome2('horse'));
console.log(palindrome2('racecar'));


//* ChatGPT gave me this solution today:
function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const alphanumericStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  
  // Compare the original string with its reversed version
  return alphanumericStr === alphanumericStr.split('').reverse().join('');
}

// Test cases
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false



//$ PALINDROME
//# PRACTICE ROUND 3
//~ I did not use a variable and I am returning true or false automatically this time, instead of manually entering true or false
//* This is called "implicit return" when the conditional expression returns falsy or truthy. "In JavaScript, expressions have truthy or falsy values."
// Check if a string is a palindrome: Write a function to determine whether a given string is a palindrome or not. The function should return true if the input string is a palindrome, and false otherwise.
function evalPalindrome(word1) {
  return word1.split('').reverse().join('') === word1 // notice no manual returns for true or false here...the double equal conditional expression returns true or false by default
}

console.log(evalPalindrome('racecar'));
console.log(evalPalindrome('horsey'));





//$ PALINDROME
//# PRACTICE ROUND 4
// Check if a string is a palindrome: Write a function to determine whether a given string is a palindrome or not. The function should return true if the input string is a palindrome, and false otherwise.




//$ PALINDROME
//# PRACTICE ROUND 5
// Check if a string is a palindrome: Write a function to determine whether a given string is a palindrome or not. The function should return true if the input string is a palindrome, and false otherwise.




