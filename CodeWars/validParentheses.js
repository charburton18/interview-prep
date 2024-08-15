// function validParentheses(parenStr) {
//   // Your code here
// }
/*
Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
Constraints
0 <= length of input <= 100

All inputs will be strings, consisting only of characters ( and ).
Empty strings are considered balanced (and therefore valid), and will be tested.
For languages with mutable strings, the inputs should not be mutated.

Protip: If you are trying to figure out why a string of parentheses is invalid, paste the parentheses into the code editor, and let the code highlighting show you!
*/


/*
R: 

E: 
"()"              =>  true
"(())))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
""               =>  true

A:
*/
//define func called validParentheses which takes a parameter of parenStr - which will only be a string of ( or )'
function validParentheses(parenStr) {
  //Create an array called matchedIndexes = []
  const matchedIndexes = [];
  // define two variables that store the number of open and closed parens in the string
  let numOfOpen = 0;
  let numOfClosed = 0;
  // loop through parenStr 
  for (let i = 0; i < parenStr.length; i++) {
    //    If parenStr[i] == '(' then add 1 to numOfOpen
    if (parenStr[i] == '(') {
      numOfOpen++;
    }
    //    If parenStr[i] == ')' then add 1 to numOfClosed
    if (parenStr[i] == ')') {
      numOfClosed++;
    }
  }

    // if parenStr is empty, return true
    if (parenStr == '') {
      return true;
    }
    //if # of ")" !== # "(" OR if parenStr[0] === ")" OR if parenStr[parenStr.length - 1] === "("
    if (numOfOpen !== numOfClosed || parenStr[0] === ')' || parenStr[parenStr.length - 1] === '(') {
      return false;
    }
    else {
      // else loop to check if each "(" has a unique closing ")" which is at a higher index
      //   - loop through the string, comparing the index value (i) to each index value after; while i < parenStr.length; i++
      for (let i = 0; i < parenStr.length; i++) {
        //       if parenStr[i] == ")"
        //       continue;
        if (parenStr[i] == ')') {
          continue;
        }
        for (let j = i+1; j < parenStr.length; j++) {
          //     - loop through the string comparing the j index to i. j starts at index of i + 1; while j < parenStr.length; increment j++
          //     if parenStr[i] !== parenStr[j] AND matchedIndexes.includes(j) == false
          //       matchedIndexes.push(i, j) // first loop [0, 1] second loop [0, 1, 3, 5]
          //         break;
          if (parenStr[i] !== parenStr[j] && matchedIndexes.includes(j) == false) {
            matchedIndexes.push(i, j)
            break;
          }
          //     if matchedIndexes.includes(j) == false
          //       continue if you haven't reached the end of the str
          if (!(matchedIndexes.includes(j) && j !== parenStr.length)) {
            continue;
          }
          //       if you HAVE reached the end of the str then return false (that means you have an extra, unpaired parentheses)
          //     else
          //       continue;
          if (j == parenStr.length) {
            return false;
          }
          else {
            continue;
          }
        }
      }
    }
}

  console.log(validParentheses('())(()'));


        
        
  
/*

true:
- if parenStr = "" 
    return true
if # of ")" == # "(" AND if each "(" has a unique closing ")" which is at a higher index
  - return true
  
false:
- if # of ")" !== # "("
- if the first char is ) -- unnecessary?
- if the last char is ( -- unnecessary?

)(
())(()
(()())
((())())
  
*/