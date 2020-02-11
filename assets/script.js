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

//  ------------------------------LowerCase--------------------------------------
if (pwLower === true){ 
   (characters += charLower);
}
else{ ("");
}    

//--------------------------------UpperCase--------------------------------------
if (pwUpper === true){ 
   (characters += charUpper);
}
else{ ("");    
}    

//---------------------------------Numbers---------------------------------------
if (pwNum === true){ 
   (characters += num);
}
else{ ("");    
}    

//---------------------------------Symbols---------------------------------------
if (pwSym === true){ 
   (characters += sym);
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