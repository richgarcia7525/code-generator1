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
  //ask user for additional criteria
  const caseLower = prompt("Include Lowercase yes or no ");
  const caseUpper = prompt("Include Uppercase yes or no ");
  const numericCriteria = prompt("Include Numeric yes or no ");
  const specialCriteria = prompt("Include Special Characters yes or no");
  //Using the variables to check if user met criteria
  let isLower = caseLower && caseLower.toLowerCase() == "yes";
  let isUpper = caseUpper && caseUpper.toLowerCase() == "yes";
  let isnumeric = numericCriteria && numericCriteria.toLowerCase() == "yes";
  let isspecial = specialCriteria && specialCriteria.toLowerCase() == "yes";

  if (!isLower && !isUpper && !isnumeric && !isspecial) {
    //no criteria has been selected then return null
    alert("No Criteria has been selected");
    return "";
  }

  //starting with empty password
  let password = "";
  //satisfy criteria in the first character
  if (isLower) {
    password = password + randomLower();
  }
  if (isUpper) {
    password = password + randomUpper();
  }
  if (isnumeric) {
    password = password + randomNumber();
  }
  if (isspecial) {
    password = password + randomSpecial();
  }
  //complete password after meeting initial criteria
  do {
    let passwordLength = password.length;
    //complete the password criteria
    for (let i = passwordLength; i < Number(length); i++) {
      //generate a random position between 1 , 4
      const position = randomIntFromInterval(1, 4);
      if (isLower && position == 1) {
        password = password + randomLower();
      }
      if (isUpper && position == 2) {
        password = password + randomUpper();
      }
      if (isnumeric && position == 3) {
        password = password + randomNumber();
      }
      if (isspecial && position == 4) {
        password = password + randomSpecial();
      }
    }
  } while (password.length < Number(length));
  //repeat until criteria is filled
  return password;

  function randomIntFromInterval(min, max) {
    //min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  function randomNumber() {
    return String.fromCharCode(randomIntFromInterval(48, 57));
  }
  function randomSpecial() {
    return String.fromCharCode(randomIntFromInterval(33, 47));
  }
  function randomUpper() {
    return String.fromCharCode(randomIntFromInterval(65, 90));
  }
  function randomLower() {
    return String.fromCharCode(randomIntFromInterval(97, 120));
  }
}
