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
//  If/Else statements based on user response that assign value to 'characters' used in generate function 

//  ------------------------------LowerCase--------------------------------------
var pwLower = confirm("Do you want to include lower case characters?");
if (pwLower === true){ 
   (characters += charLower);
   alert("You chose to include Lower Case Characters")
}
else{ ("");
}    

//--------------------------------UpperCase--------------------------------------
var pwUpper = confirm("Do you want to include Upper Case Characters?");
if (pwUpper === true){ 
   (characters += charUpper);
   alert("You chose to include Upper Case Characters")
}
else{ ("");    
}    

//---------------------------------Numbers---------------------------------------
var pwNum = confirm("Do you want to include Numbers?");
if (pwNum === true){ 
   (characters += num);
   alert("You chose to include Numbers")
}
else{ ("");    
}    

//---------------------------------Symbols---------------------------------------
var pwSym = confirm("Do you want to include Special Characters?");
if (pwSym === true){ 
   (characters += sym);
   alert("You chose to include Special Characters")
}
else{ ("");
}


// Password generator function which randomly selects characters
function generatePassword(pwLength,characters){
    password = "";
    for (var i = 0; i < pwLength; i++){
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return password;
}

//console log to check to make sure function works properly
console.log(generatePassword(pwLength,characters));

// Write password to the #password input
function writePassword(myPassword) {
    var passwordText = document.querySelector("#password");
    passwordText.value = myPassword;
} 

//  Function to display password by assigning value to 'password' through other functions.
function showPassword(){
    var password = generatePassword(pwLength,characters);
    writePassword(password);
}

//  Click event. When user clicks 'generate pw btn' this will use responses from if/else statements 
//  and writePassword function to generate pw.
generateBtn.addEventListener("click", showPassword);