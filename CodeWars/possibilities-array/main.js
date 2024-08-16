// A non-empty array a of length n is called an array of all possibilities if it contains all numbers between 0 and a.length - 1 (both inclusive).

// Write a function that accepts an integer array and returns true if the array is an array of all possibilities, else false.

// Examples:

// [1,2,0,3] => True
// # Includes all numbers between 0 and a.length - 1 (4 - 1 = 3)

// [0,1,2,2,3] => False
// # Doesn't include all numbers between 0 and a.length - 1 (5 - 1 = 4)

// [0] => True
// # Includes all numbers between 0 and a.length - 1 (1 - 1 = 0).


// writing a function that's input is integer array and output is true if array has all the indexes listed as values, else false
// define some arrays to test
// function called checkPossibilities with (arr) that outputs true or false
  // How can I check each value against several values? Or operator?? Loop?
  // loop through each i
  // if arr[i] !== i then continue the loop, compare the next value, etc.
  // if arr[i] === i then continue the loop
  // if all arr[i] are equal to an i, then return true
  // if one or more arr[i] are not equal to i, then return false

const arr1 = [1,2,0,3]
const arr2 = [0,1,2,2,3]
const arr3 = [0]

  const checkPossibilities = (a) => {
    for(let i = 0; i < a.length; i++) {
      const currentValue = a[i]
      if (0 <= currentValue <= a.length - 1) { // this returns true if one value is missing
      return true;
      } else
      return false;
    }
  }

  console.log(checkPossibilities(arr2));
  // loop
  // if 0 <= [i] <= a.length return true
  // else false



  // Solution

  function isAllPossibilities(x){_
  
    for(let i=0; i<x.length; i++){
      if(!x.includes(i)){
        return false;
      }
    }
    return true;
  }


  // also could use indexOf to return -1 if false