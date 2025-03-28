// create 4 variables named lap1, lap2, lap3, and lap4
const lap1 = 0.00;
const lap2 = null;
const lap3 = null;
const lap4 = null;

// create 4 functions called startWatch, stopWatch, lapWatch, clearWatch

// startWatch takes in a positive integer and outputs that same integer adding seconds and milliseconds in real-time. It goes until it hits 24 hours (24:00:00.00). Cannot take in letters, negative nums, etc.
const startWatch = (int) => {
  return int + .01;
};

setInterval(startWatch, 1000, lap1);
console.log(lap1);

// stopWatch pauses the startWatch function. It takes in the output of startWatch, and outputs that same value (with no more counting up).

// lapWatch pauses the startWatch function. It takes in the output of startWatch, and returns that output, it also returns that same output with a real-time count-up on it. It can do this no more than 3 times.

// clearWatch takes in a positive integer, returns 0.
const clearWatch = (int) => {
  return 0;
};