
function reverseStringBySpace(str) { // Split any strings that are separated by a blank space. Then reverse the strings. Then join the strings with a space between the two strings. 
    return str.split(" ").reverse().join(" ");
}
console.log("Answer 1:", reverseStringBySpace("hello world"));

//? What happens if we join the two strings without a space between the quotes?
//~ Answer: worldhello
//# Why? Because we are joining two strings with NO space between
function reverseStringNoSpace(str) { 
    return str.split(" ").reverse().join("");
}
console.log("Answer 2:", reverseStringNoSpace("hello world"));

//? What happend if we don't join at all?
//~ Answer 3: When we don't use join, we get back an array of two strings that were split at the space between the two strings
function reverseStringNoJoin(str) { 
    return str.split(" ").reverse();
}
console.log("Answer 3:", reverseStringNoJoin("hello world"));

function splitAString(str) { // Split will split characters of a string into a single array of strings, each string representing a character delimited by nothing, or some other character
    return str.split(""); //here, split will take each letter (since the paranthesis delimiter says to not use any spaces or characters to split up the elements) and will create a new string out of each letter...and then it will place each of those into a single array.
}
console.log(splitAString("hello world"));

function splitAndDelimitBySpace(str) {
    return str.split(" "); //here we split the string "hello world" by a delimiter, which is a blank space
}
console.log(splitAndDelimitBySpace("hello world"));



//^ PRACTICE CREATING OBJECTS
//object literal syntax
var object = {
    name: "Kenny",
    age: 40,
    gender: "Male"
}

console.log("My name is", object.name, " and I am ", object.age, "years of age.")

//^ PRACTICE REVERSING STRING
var string = "Welcome to this Javascript Guide!"

const reversedString = string.split(" ").reverse().join(" ");
const reversedStringNoJoin = string.split(" ").reverse();
const reversedStringNoReverse = string.split(" ").join(" "); // this would obviously be pointless...but if we test with no spaces...as below...
const reversedStringNoSpaces = string.split(" ").join(""); // ...we effectively eliminate the spaces between strings

console.log("The string, reversed, would be: ", reversedString);
console.log("The string, reversed, would be: ", reversedStringNoJoin);
console.log("The string, not reversed, would be: ", reversedStringNoReverse);
console.log("The string, with no spaces, would be: ", reversedStringNoSpaces);

//^ PRACTICE CHECKING IF A NUMBER IS AN INTEGER
function isInt(num) {
    return num % 1 === 0;
}

console.log(isInt(4)); //true
console.log(isInt(12.2))

