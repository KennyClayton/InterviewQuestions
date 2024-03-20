// FROM FREECODECAMP: In Computer Science a queue is an abstract Data Structure where items are kept in order. New items can be added at the back of the queue and old items are taken off from the front of the queue.

function nextInLine(arr, item) {
    // Only change code below this line
    arr.push(item)
    return arr.shift(item);
    // Only change code above this line
  }
  
  // Setup
  let testArr = [1, 2, 3, 4, 5];
  
  // Display code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));


  // My practice below, but with 3 parameters/arguments. Notice why the array is different after the second console. Because between the console logs, we gave arguments(values) to the parameters. So when we log the value of testArr2 with the second console log, it has 
  function nextInLine2(arr2, item2, item3) {
    arr2.unshift(item3)
    arr2.push(item2)
    return item2 + item3;
  }

  let testArr2 = [12,14,16,18];


  console.log(testArr2);
  console.log("Before: " + JSON.stringify(testArr2));
  console.log(nextInLine2(testArr2, 10, 20));
  console.log("After: " + JSON.stringify(testArr2));