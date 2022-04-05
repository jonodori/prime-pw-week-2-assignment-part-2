// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We make a variable called name and set it to a string called Dane.
// We check to see if the variable name is an exact match with the string of Mary. If it is, we print 'Hi, Mary!'
// If it's not, we print 'How do you do?'
//

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We make a variable called secret. Also, we make a variable called code and assign a number value 123.
// We check to see if code is an exact match to 123. If it is, we assign a string "super" to the secret variable 
// and we assign a new number value to code which is code multiplied by the number 2. 
// We then check to see if code is greater than 250 and if it is we assign the string "duper" to secret.  
// Then we print the value of the variable secret. 


//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We create a variable called isStudent and assign a boolean to true.
// We create a variable age and assign a number 34.
// We create a variable zip and assign a number 55407.
// We check to see if the variable isStudent is true and the zip is greater than 80000. If it is, we print "You're a student on the 
// West Coast!".
// If the first statement is false, we then check to see if the variable isStudent is false or the age is less than 30. If argument is true,
// we print "What are your hobbies?"
// If the previous statement is false, we then check to see if the variable isStudent is true and if it is, we print "Welcome to Prime!".
// If all the above statements are false, we print "How about the weather?".


//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
let colorOne = 'red';
let colorTwo = 'blue';
// Set colorOne to 'blue' instead of red and colorTwo to 'red' 
let mix = true;

if (mix === true) {
  colorOne = 'purple';
// add, colorTwo = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

if (temp > 39 || time >= 4) {
// Replace || with &&   
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
// FIX, if(age >= minAge)  
  console.log('no entry');
// FIX, console.log('enter');  
} else {
  console.log('enter');
// FIX, console.log('no entry');  
}
*/

