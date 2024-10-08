/*

https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/javascript

Restate:
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
The output should be two capital letters with a dot separating them.
It should look like this (see Examples)

My Questions:
What is the input? A string with only one space in it (between letters)
What is the output? A string consisting of a capital letter, a dot, another capital letter
What should the function do? (see Approach)

Examples:
Sam Harris => S.H
patrick feeney => P.F
a b => A.B


Approach:
- Define the first letter as firstInitial
- Define the letter after the space as lastInitial
- use toUppercase() on the firstInitial and lastInitial
- return the two upper-cased letters with a '.' in between them

Code:
*/
function abbrevName(name) { // Sam Harris
//Define the first letter as firstInitial
  const firstInitial = name.substring(0,1);
//Define the space's index number as onlySpaceIndex
  const onlySpaceIndex = name.indexOf(' ');
//Define the letter after the space as lastInitial
  const lastInitial = name.substring(onlySpaceIndex+1, onlySpaceIndex+2);
//use toUppercase() on the firstInitial and lastInitial
// return the two upper-cased letters with a '.' in between them
  return console.log(firstInitial.toUpperCase() + '.' + lastInitial.toUpperCase())
}

abbrevName('waDASDm qaSDwarris');

/*

****************Test:

****************Optimize:


*/