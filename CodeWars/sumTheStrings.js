function sumStr(a, b) {return ((a*1) + (b*1)).toString()}

console.log(sumStr("-5", "3"));

/*
Restate: Create a function that takes in two integers as strings, 
and returns the sum as a string.

Questions: Letters instead of nums? (n/a) 
What happens when you add "5" + "5" in JS? It concatenates the strings, returns string type
What happens when you add ("5"*1) + ("5"*1) in JS? It adds nums, returns integer.
How do I use typeof? Could only use it inside func (not when calling func)
How do I change integer back into a string? use num.toString()
Difference between toString() and stringify()? Stringify turns obj into string.
toString() turns num into string.

Examples:
"4",  "5" --> "9"
"", "" --> "0"
"2", "" --> "2"
"-5", "3" --> "-2"

Approach:
 define a function called sumStr that takes in two integers as strings, and
 returns their sum as a string data type
   return ((a*1) + (b*1)).toString(); 

Code: see above

Test: ran all arguments through func

Optimize:
Is this O(n), O(1), or O(2)?

*/