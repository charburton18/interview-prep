// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/javascript

// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

// function reverseWords(str) {

// }

/*
Restate:
Is each letter flipped over it's y-axis? No
Is each word in the same order? Or reverse order? ********YES Same order of words.*********
Capitalization retained? Yes
Punctuation and spaces retained? Yes, if it's part of a word it gets treated like a letter "hi!" -> "!ih"
What data type goes in? Out? A string goes in "hi there" -> "ih ereht"
What does the function output if it receives a non-string datatype? Number? Object? Null? Undefined?
How many letters could be in the input string?

Examples:
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
1                     ==> "Sorry, please use quotes around your phrase."
"!? !?"               ==> "?! ?!" 

Approach/Pseudocode:
Brainstorming:
Option 1. we could turn the str into an array. Or an array of arrays (each word is an array). Use array methods on the arrays to get new arr. Change arr back into new str.
Option 2. we could loop through the string and create a new string from that. 
Option 3. there might be a js method that reverses strings

My Second, Improved Solution:
Option 1
  Turn the string into multiple arrays, each array is array.split wherever there is a space (" ").
  Filter(?) every array so that the letters are listed in reverse order.
  Concatenate the arrays and turn them back into a string, adding 1 space (" ") between each array. (use .join?)
  * * * How do we account for multiple spaces in a row? * * *

Code with comments:
*/
// define a function called reverseStr with an input of str
const reverseWords = (str) => { // str = 'hi there!'
  // define strAsArr as str split into array elements at each space
  const strAsArr = str.split(" "); // strAsArr = [ 'hi', 'there!']
  // iterate through the substrings split each one into another array using .split('') => gives us an array of arrays
  // flip the substrings order of letters using .reverse
  // use .join('') to concatenate all internal array values
  // use .join(' ') to concatenate all remaining array values with spaces in between
  const arrOfArrs = strAsArr.map((subStr) => {return subStr.split('').reverse().join('')}).join(' '); // ['ih', '!ereht']
  return arrOfArrs;
  // return reversedArr;
}

// Code without comments:
function reverseWords(str){
  const strAsArr = str.split(" ");
  const arrOfArrs = strAsArr.map((subStr) => {return subStr.split('').reverse().join('')}).join(' ');
  return arrOfArrs;
};

// passes all tests! :)

/*

Test:

Optimize:

Notes:

My Initial Solution:

Decided to do Option 2
Loop through the given string, starting from the first index.
if current index (i) is not a space (" ") && [i-1] is NOT a space - then add i's value to the front of an array named word[i] with an array method.
else if current index (i) is not a space (" ") && [i-1] IS space - then define a new arr called word[i] and add i's value to the front of an array named word[i] with an array method.
else if current index (i) is a space (" ") then define a new arr called space[i] add the current index value to space[i]. 
before loop closes concatenate all arrays together. 

Create a string from that concatenated arr. Return the value of the final string.

wordAtIndex0 = [s, i, h, T]
spaceAtIndex4 = [ ]
wordAtIndex5 = [s, i]
spaceAtIndex7 = [ ]
wordAtIndex8 = [n, a]
spaceAtIndex10 = [ ]
wordAtIndex11 = [!, a, l, p, m a, x, e]
*/


// for (let i = 0; i < strAsArr.length; i++) { // [ 'hi', 'there!']
//   //take the last letter of each array element and make it the first letter
//   for (let j = 0; j < [i].length; j++) { 
//     // take the letter at the j index and add that value into the last index (use slice -1??)
//     let partialReverse = strAsArr[i] + strAsArr[i].charAt(j); // '!there!'
//     let reversedWord = partialReverse.slice(1, partialReverse.length); 
//     // save reversedWord as a variable to concatenate with other variables later ???????
//   }
// }