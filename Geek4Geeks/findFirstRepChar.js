// // Given a string S. The task is to find the first repeated character in it.
// // We need to find the character that occurs more than once and whose index of second occurrence is smallest. S contains only lowercase letters.

// // You don't need to read input or print anything. Your task is to complete the function firstRepChar() which accepts a string S as input parameter and returns a string containing first repeated character in it. If there is no repeated character in the string S then return "-1".

// class Solution {
//     firstRepChar(s) {
//       let repeatedIndicies = [];
//       // for loop through each letter of s
//       for (let i = 0; i < s.length; i++) {
//         //loop through each letter of s again
//         //console.log(i);
//         for (let j = i + 1; j < s.length; j++) {
//           //   console.log(j);
//           if (s[i] == s[j]) {
//             // then take the index of j and pushed onto the back of an array called repeatedIndicies
//             repeatedIndicies.push(j); // 1ST RUN RI = [3] // 2ND RUN [3,2]
//           }
//         }
//       }
//       if (repeatedIndicies.length == 0) {
//         return -1;
//       } else {
//         // Find the smallest number in repeatedIndicies. Return the str.[smallestNum]
//         return s[Math.min(...repeatedIndicies)];
//       }
//     };
// }



// // LOTS of syntax errors.
// // Forgot () after if statements.
// // Forgot = after arrowfunc name.
// // Forgot that let i = 0 is fine but NOT i >= 0.
// // Forgot to make repeatedIndicies empty arr at top level scope inside function
