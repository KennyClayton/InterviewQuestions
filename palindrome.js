//$ PALINDROME
//# PRACTICE ROUND 1
// Check if a string is a palindrome: Write a function to determine whether a given string is a palindrome or not. The function should return true if the input string is a palindrome, and false otherwise.

// .split("").reverse("").join("")

function checkPal(val) {
  let newVal = val.split("").reverse().join(""); //means split up each letter into its own string since no space between each one, then reverse the order of each those letters, then join those letters back into a single string
  if (newVal === val) {
    return "Yes, the word " + val + " is a palindrome!";
  }
  return "No, the word " + val + " is NOT a palindrome!";
}

console.log(checkPal("reacecar"));
console.log(checkPal("racecar"));


//$ PALINDROME
//# PRACTICE ROUND 2
// Check if a string is a palindrome: Write a function to determine whether a given string is a palindrome or not. The function should return true if the input string is a palindrome, and false otherwise.




//$ PALINDROME
//# PRACTICE ROUND 3
// Check if a string is a palindrome: Write a function to determine whether a given string is a palindrome or not. The function should return true if the input string is a palindrome, and false otherwise.




//$ PALINDROME
//# PRACTICE ROUND 4
// Check if a string is a palindrome: Write a function to determine whether a given string is a palindrome or not. The function should return true if the input string is a palindrome, and false otherwise.




//$ PALINDROME
//# PRACTICE ROUND 5
// Check if a string is a palindrome: Write a function to determine whether a given string is a palindrome or not. The function should return true if the input string is a palindrome, and false otherwise.




