// Assignment Code
var generateBtn = document.querySelector("#generate");
var charLower = "abcdefghijklmnopqrstuvwxyz";    
var charUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var num = "0123456789";
var sym = "!@#$%^&*(){}[]=<>/.,";
var characters = "";

//  Prompt to ask how many characters the user wants the password to be.
var pwLength = Number(prompt("How many characters would you like your new password to be?"));
if (pwLength < 8 || pwLength > 128) {
    alert("Desired number of characters in password must be 8 to 128 in length");
}
else { 
    alert("You chose " + pwLength + " characters long.");
}

//  List of booleans to ask which properties the user wants in the pw. (upper case, lower case, numbers and symbols) 
    var pwLower = confirm("Do you want to include lower case characters?");
    var pwUpper = confirm("Do you want to include upper case characters?");
    var pwNum = confirm("Do you want to include numbers?");
    var pwSym = confirm("Do you want to include special characters?");

//  If/Else statements based on user response that assign value to 'characters' used in generate function 
    if (pwLower === true){ 
        (characters += charLower);
}
    else{ ("");
}    

    if (pwUpper === true){ 
        (characters += charUpper);
}
    else{ ("");    
}    
    if (pwNum === true){ 
        (characters += num);
}
    else{ ("");    
}    
    if (pwSym === true){ 
        (characters += sym);
}
    else{ ("");
}
  







// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
