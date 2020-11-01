// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
var lowercaseSet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "P", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercaseSet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numberSet = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
var specialSet = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", '"', ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "", "^", "_", "`", "{", "|", "}", "~"]
var passwordArray = [""]

function passwordInput() {
  
  var promptLength = window.prompt("How many characters would you like your password to contain?");
        if (promptLength === "" || promptLength === null) {
          window.alert("You must provide a length between 8 - 128 characters. Please try again.");
        }
        else {
          promptLength = parseInt(promptLength);
          Number.isInteger(promptLength);
          if (isNaN(promptLength) || promptLength < 8 || promptLength > 128) {
            window.alert("You must provide a number between 8 - 128 characters");
            passwordInput();
          }
        }

  var lowercaseConfirm = window.confirm("Would you like your password to include lowercase letters?");

  var uppercaseConfirm = window.confirm("Would you like your password to include uppercase letters?");

  var numberConfirm = window.confirm("Would you like your password to include numbers?");

  var specialConfirm = window.confirm("Would you like your password to include special characters?");

  // check that user answered yes to at least one prompt
  var validatePrompts = function() {
    if (uppercaseConfirm === false && lowercaseConfirm === false && numberConfirm === false 
      && specialConfirm === false) {
      window.alert("You must include at least one character type. Please try again.");
      passwordInput();
  }
  }
  validatePrompts();

  var userChoices = {
    length: promptLength,
    lowercase: lowercaseConfirm,
    uppercase: uppercaseConfirm,
    number: numberConfirm,
    special: specialConfirm
  }
  console.log(userChoices);
  return userChoices;

}
function randomChar (array) {
  var arrayItem = Math.floor(Math.random() * array.length);
  return array[arrayItem];
}

function generatePassword () {
  var getPasswordInput = passwordInput ();
  for (var i = 0; i < getPasswordInput.length; i++) {
    password = randomChar(lowercaseSet) + randomChar(uppercaseSet) + randomChar(numberSet) + randomChar(specialSet);
  }
  
  return password;
 
 
  console.log(getPasswordInput);
  // return password (set it equal to pw)
}  


  function writePassword () {
  // from starter code:
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }

  
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
