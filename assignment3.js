// *********************Chapter 9-11***************


// 1. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”
let city = prompt("enter your city name");
if (city == "Karachi" or city == "karachi") {
    alert("Welcome to city of lights");
}

// 2. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.
let gender = prompt("Enter Gender");
if (gender.toLowerCase() == "male") {
    alert("Good Morning Sir");
}
else if (gender.toLowerCase() == "female") {
    alert("Good Morning Ma'am");
};


// 3. Write a program to take input color of road traffic signal from the user & show the message according to this table:
// Signal color    Message
// Red             Must Stop
// Yellow          Ready to move
// Green           Move now
let color = prompt("Enter color of road traffic signal");
if (color == "Red") {
    alert("Must Stop");
}
else if (color == "Yellow") {
    alert("Ready to move");
}
else if (color == "Green") {
    alert("Move now");
}

// 4. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25 litres,show the message “Please refill the fuel in your car”
let fuel = prompt("Enter remaining fuel in car");
if (fuel < 0.25) {
    alert("Please refill the fuel in your car");
}

// 5. Run this script, & check whether alert message would be displayed or not. Record the outputs.
// a. var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
given condition for variable a is true

// b. var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
null

// c. var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
Condition 2 is true
Condition 4 is true

// d. var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
The cost equals

// e. if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
True

// f. if("car" < "cat"){
//     alert("car is smaller than cat");
//     }
car is smaller than cat

// 6. Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page. Take percentage & compute grade as per following table:
// Show the total marks, marks obtained, percentage, grade & remarks like:
let sub1, sub2, sub3, totalMarks, result1, remarks;
sub1 = +prompt("Enter marks of subject 1");
sub2 = +prompt("Enter marks of subject 2");
sub3 = +prompt("Enter marks of subject 3");
totalMarks = 300;
result1 = (sub1 + sub2 + sub3) / totalMarks * 100;
if (result1 >= 80) {
    console.log("A-one Grade, Excellent");
} else if (result1 >= 70) {
    console.log("A Grade, Good");
}
else if (result1 >= 60) {
    console.log("B Grade, You need to improve");
}
else {
    console.log("Fail, Sorry ");
}


// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct answer”.
// b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”.
var secretNumber = 7;

var guessNumber = parseInt(prompt("Guess the secret number (1 to 10):"), 10);

if (guessNumber === secretNumber) {
    alert("Bingo! Correct answer");
} else if (guessNumber + 1 === secretNumber || guessNumber - 1 === secretNumber) {
    alert("Close enough to the correct answer");
} else {
    alert("Sorry, try again! The secret number was " + secretNumber);
}

// 8. Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3.
let number = +prompt("enter a number to check whelter divisible by 3 or not");
if (number % 3 == 0) {
    alert("The number is divisible by 3");
}
else {
    alert("The number is not divisible by 3");
}

// 9. Write a program that checks whether the given input is an even number or an odd number.
let number1 = +prompt("enter a number to check whelter even or odd");
if (number1 % 2 == 0) {
    alert("The number is even");
}
else {
    alert("The number is odd");
}

// 10. Write a program that takes temperature as input and shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”
let T = prompt("enter temperature");
if (T > 40) {
    console.log("It is too hot outside.");
}
else if (T > 30) {
    console.log("The Weather today is Normal.");
}
else if (T > 20) {
    console.log("Today’s Weather is cool.");
}
else if (T > 10) {
    console.log("OMG! Today’s weather is so Cool.");
}

// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.
let num1 = +prompt("enter number1");
let num2 = +prompt("enter number2");
let opt = prompt(" + , _ , * , / ");
let result;
if (opt == " + ") {
    result = num1 + num2;
    console.log("the sum of num1 and num2 is" + result);
}
else if (opt == " - ") {
    result = num1 - num2;
    console.log("the difference of num1 and num2 is" + result);
}
else if (opt == " * ") {
    result = num1 * num2;
    console.log("the product of num1 and num2 is" + result);
}
else if (opt == " / ") {
    if (num2 > num1) {
        console.log("num2 is greater than num1");
    }
    else {
        result = num1 / num2;
        console.log("the division of num1 and num2 is" + result);
    }
}
else {
    console.log("invalid operator");
}




// ***********************chapter 12-13***************


// 1. Write a program that takes a character (number or string) in a variable & checks whether the given input is a number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).
let input = prompt("Enter a character");
if (input.length === 1) {
    var asciiCode = input.charCodeAt(0);

    if (asciiCode >= 48 && asciiCode <= 57) {
        alert(input + " is a number.");
    } else if (asciiCode >= 65 && asciiCode <= 90) {
        alert(input + " is an uppercase letter.");
    } else if (asciiCode >= 97 && asciiCode <= 122) {
        alert(input + " is a lowercase letter.");
    } else {
        alert(input + " is neither a number nor a letter.");
    }
} else {
    alert("Please enter a single character.");
}

// 2. Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.
var number2 = +prompt("Enter the first integer:");

var number3 = +prompt("Enter the second integer:");

if (number2 > number3) {
    alert("The larger number is: " + number2);
} else if (number3 > number2) {
    alert("The larger number is: " + number3);
} else {
    alert("Both numbers are equal.");
}

// 3. Write a program that takes input a number from user & state whether the number is positive, negative or zero.
var number4 = +prompt("Enter a number:");

if (number4 > 0) {
    alert("The number is positive.");
} else if (number4 < 0) {
    alert("The number is negative.");
} else {
    alert("The number is zero.");
}

// 4. Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise
var userInput = prompt("Enter a character:");

if (userInput.length === 1) {
    var char = userInput.toLowerCase();
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        alert("The character is a vowel.");
    } else {
        alert("The character is not a vowel.");
    }
} else {
    alert("Please enter a single character.");
}

// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then give message “ Please enter your password”
// ii. Check if both passwords are same. If they are same, show message “Correct! The password you entered matches the original password”. Show “Incorrect password” otherwise.

var correctPassword = "Xyz@abc789+";

var userPassword = prompt("Please enter your password:");

if (userPassword === "") {
    alert("Please enter your password");
} else if (userPassword === correctPassword) {
    alert("Correct! The password you entered matches the original password.");
} else {
    alert("Incorrect password");
}

// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
}
else {
    greeting = "Good evening";
}

// 7. Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the following case using if, else & else if statements
