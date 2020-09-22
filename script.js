///////////////////////////////////////////////////////////////////////
// PASSWORD GENERATOR

/*Breaking down the script into smaller series of tasks
Get vars for user criteria
Get a validation input from the user
Code the function
Put it on the loop
*/


//Global array to hold all the vars outsode the function for cleaner code(beware this might conflict  more complex scripts!!!!)
var lowerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numericArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialArray = ["~", "!", "#", "$", "%", "^", "&", "*", "-", "_", "/"];

// Generate password function if the given criteria is met 
function generatePassword() {
    var lenght = prompt("Choose a password lenght");
    if (lenght < 8 || lenght > 128) {
        alert("Your password must be between 8 to 128 characters");
        return;
    }
    // User validation will ask and alert the user for the input
    var lowerCase = confirm("choose lowercase?");
    var upperCase = confirm("CHOOSE UPPERCASE?");
    var numeric = confirm("Choose numbers?");
    var specialCharacters = confirm("special !@#$%^& characters");
    if (lowerCase === false && upperCase === false && numeric === false && specialCharacters === false) {
        alert("Start over!!!");
        // If imput is false "cancel" start over
        return;

    }
    var options = [];
    var results = [];
    //Used .concat() to join my arrays
    if (lowerCase === true) {
        options = options.concat(lowerArray);
    }
    if (upperCase === true) {
        options = options.concat(upperArray);
    }
    if (numeric === true) {
        options = options.concat(numericArray);
    }
    if (specialCharacters === true) {
        options = options.concat(specialArray);
    }

    //Generate random options loop
    for (var i = 0; i < lenght; i++) {
        results.push(options[Math.floor(Math.random() * options.length)])
    }
    return results.join("");

}



// * For this assignment, you will not be changing the HTML and CSS at all.
//
// * You will need a generatePassword function is called when the user
//   clicks the Generate Password button.
//
// * You can create other functions that are called from within
//   generatePassword
//
// * Gather user input with prompt's and confirm's

///////////////////////////////////////////////////////////////////////
// DO NOT TOUCH THIS CODE
//
// This code handles:
// * clicking the Generate Password
// * writing the password to the screen
//

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//////////////////////////////////////////////////////////////////////