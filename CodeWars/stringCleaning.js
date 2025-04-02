/*
Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of old novels to your database. At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text.

Examples (input -> output)
'! !'                 -> '! !'
'123456789'           -> ''
'This looks5 grea8t!' -> 'This looks great!'
Your harried co-workers are looking to you for a solution to take this garbled text and remove all of the numbers. Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.
------------------------------------------

Restate: Given a string, return the same string with all the numbers removed: 0 - 9
Examples: 'a1b' = 'ab'
'a' = 'a'
'0+1' = '+'
Approach:
Create a function called stringClean with the parameter s (s is a string)


Way 1:
use s.replace("0", "");
Do this for each digit 1-9
return s 
// this doesn't work because s.replace does not mutate the original string, it creates a new string


Way 2:
loop through each character in s
if the value at the index of i === a number (0-9) then delete it from the string
// You can't just "delete" a character from a string 

Way 3:
define an empty array
Turn s into an array
Loop through the array
if the value at the index of i === a number (0-9) then array.pop
after loop is is finished, turn arr back into mutatedString
return mutatedString

Code:
Test:
Optimize:

Other code:
  s.replace('0', '');
  s.replace('1', '');
  s.replace('2', '');
  s.replace('3', '');
  s.replace('4', '');
  s.replace('5', '');
  s.replace('6', '');
  s.replace('7', '');
  s.replace('8', '');
  s.replace('9', '');

//   for (let i = 0; i < splitArr.length; i++) {
// //     if the value at the index of i === a number (0-9) then array.pop
//     if (splitArr[i] === '0' || splitArr[i] === '1' || splitArr[i] === '2' || splitArr[i] === '3' || splitArr[i] === '4' || splitArr[i] === '5' || splitArr[i] === '6' || splitArr[i] === '7' || splitArr[i] === '8' || splitArr[i] === '9') {
//       console.log(`Spliced out this number at the ${i}th index. Value spliced out:`, splitArr.splice(i, 1));
//     } else {
//       console.log(`no number at the ${i}th index.`);
//     }
// }
// console.log(splitArr);
// after loop is is finished, turn arr back into mutatedString
// return mutatedString
*/



// const s = 'a0123456789';

// function stringClean(s){
//   const splitArr = s.split('');
//   const bannedArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
//   const filteredArr = splitArr.filter((i) => !bannedArr.includes(i));
//   const finalString = filteredArr.join();
//   return finalString;
// };

// console.log(stringClean(s));


// SUBMITTED ANSWER:
function stringClean(s){
  const splitArr = s.split('');
  const bannedArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  const finalString = (splitArr.filter((i) => !bannedArr.includes(i))).join('');
  return finalString;
};
