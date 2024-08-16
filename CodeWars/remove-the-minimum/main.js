// The museum of incredibly dull things
// https://www.codewars.com/kata/563cf89eb4747c5fb100001b

// The museum of incredibly dull things wants to get rid of some exhibits. Miriam, the interior architect, comes up with a plan to remove the most boring exhibits. She gives them a rating, and then removes the one with the lowest rating.

// However, just as she finished rating all exhibits, she's off to an important fair, so she asks you to write a program that tells her the ratings of the exhibits after removing the lowest one. Fair enough.

// TASK
// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with the lowest index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.


// Write a function called getSmallest that takes in a parameter called numbers
  // PREP - Parameters, Returns, Examples, Pseudocode
  // Parameters - an array of integers (edge cases incl. 0, -num, [])
  // Return - a NEW array identical to original arr but missing smallest arr element. NOT mutated
  // Examples - see above
  // Pseudocode
    //  How to determine smallest array element?
      // copy the array, loop through that new array and find smallest num
      // newArr = [...arr] OR newArr  = array.slice()
        // How do we keep track of the smallest element?
          // create a variable called smallestNum (const smallestNum = arr[0])
          // loop through the array with for loop
            // then compare every # to smallestNum
            // define currentNum = arr[i]
            // if currentNum < smallestNum
            // set smallestNum = currentNum
          // newArr.indexOf(smallestNum) = indexOfSmallestNum
          // newArr.splice(indexOfSmallestNum, 1)
        // return newArr

// Examples
const arr1 = [1,2,3,4,5] //output = [2,3,4,5]
const arr2 = [5,3,2,1,4] //output = [5,3,2,4]
const arr3 = [2,2,1,2,1] //output = [2,2,2,1]
const arr4 = [1] //output = []
const arr5 = [0] //output = []
const arr6 = [] // output = []
const arr7 = [-1, 1]// output = []

function removeSmallest(numbers) {
  const newArr = [...numbers];
  let smallestNum = newArr[0];
  for(let i = 1; i < newArr.length; i++) {
    const currentNum = newArr[i];
    if(currentNum < smallestNum) {
      smallestNum = currentNum;
    }
  }
  const indexOfSmallestNum = newArr.indexOf(smallestNum);
  newArr.splice(indexOfSmallestNum, 1);
  return newArr;
}
console.log(removeSmallest(arr7));



    // Other methods we thought of:
      // .map?
      // Math.min?
      // .reduce?
