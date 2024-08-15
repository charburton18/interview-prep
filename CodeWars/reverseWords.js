// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {

}

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


Code:

Test:

Optimize:


*/