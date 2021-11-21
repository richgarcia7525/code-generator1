// Assignment Code
var generateBtn = document.querySelector("#generate");
//Added event listner to generate buttton
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  //setting generate password in HTML
  passwordText.value = password;
}
function generatePassword() {
  //asking the user for the number of charcters
  const length = prompt("How many characters in password");
  if (!length || isNaN(length) || length < 8 || length > 128) {
    //if user does not meet conditions return null
    alert("password length must be a numeric value between 8 and 128");
    return "";
  }
}
//ask user for additional criteria
const caseLower = prompt("Include Lowercase yes or no ");
const caseUpper = prompt("Include Uppercase yes or no ");
const numericCriteria = prompt("Include Numeric yes or no ");
const specialCriteria = prompt("Include Special Characters yes or no");

