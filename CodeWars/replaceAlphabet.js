// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// Input = "The sunset sets at twelve o' clock."
// Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"

// function alphabetPosition(text) {
//   return text;
// }

// const Test = require('@codewars/test-compat');

// describe("Tests", () => {
//   it("test", () => {
// Test.assertEquals(alphabetPosition("The sunset sets at twelve o' clock."), "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11");
// Test.assertEquals(alphabetPosition("The narwhal bacons at midnight."), "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20");
//   });
// });


/*
Restate:
Given a string, replace all letters with their numerical position in the alphabet. If given another char, don't return it.

Questions:
- Should this work for uppercase letter and lowercase? Yes.
- Will the input always be a string? Yes.

Examples:
"ab" -> "1 2"
"a b" -> "1 2"
"$!?#" -> ""
"Ab" -> "1 2"
"zC" -> "26 3"
"ñ" -> ""
"" -> ""

Approach:
Way 1: 
- X Make an alphabetArr
- Use if / else statements 
  - (do a loop, if the value of i is equal to a letter, return the index + 1 of that letter in the alphabetArr. Else delete.)
  - OR (loop through text, if alphabetArr includes "text" then return the index + 1 of "text" in the alphabetArr. Else do not return.)
- Allow for uppercase and lowercase letters to result in an alphabeticalNumber
- (not doing this for now) may need to turn the string into an array (so we can use array methods)

Code:
*/

function alphabetPosition(text) {
  const alphabetArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let result = "";
  for (let i = 0; i < text.length; i++) {
    if (alphabetArr.includes(text[i].toLowerCase())) {
      result = result + (alphabetArr.indexOf(text[i].toLowerCase()) + 1) + " ";
    } else {
      continue;
    };
  };
  result = result.trim();
  return result;
};

alphabetPosition("The sunset sets at twelve o' clock.");


/*
Test:
Optimize:

*/