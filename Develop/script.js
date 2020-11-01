// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// define global variables
var lowercaseSet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "P", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercaseSet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numberSet = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
var specialSet = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", '"', ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "", "^", "_", "`", "{", "|", "}", "~"]

// write function to get prompts and info from users about different pw preferences
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
// function to generate random character
function randomChar (array) {
  var arrayItem = Math.floor(Math.random() * array.length);
  return array[arrayItem];
}
// function to generate password
function generatePassword () {
  var getPasswordInput = passwordInput ();
  var passwordArray = [];
  var selectionsArray = [];
  if (getPasswordInput.lowercase) {
    passwordArray = passwordArray + randomChar(lowercaseSet);
    selectionsArray = selectionsArray.concat(lowercaseSet);
  };

  if (getPasswordInput.uppercase) {
    passwordArray = passwordArray + randomChar(uppercaseSet);
    selectionsArray = selectionsArray.concat(uppercaseSet);
  }

  if (getPasswordInput.number) {
    passwordArray = passwordArray + randomChar(numberSet);
    selectionsArray = selectionsArray.concat(numberSet);
  }

  if (getPasswordInput.special) {
    passwordArray = passwordArray + randomChar(specialSet);
    selectionsArray = selectionsArray.concat(specialSet);
  }
  
  var newLength = getPasswordInput.length - passwordArray.length;

  for (var i = 0; i < newLength; i++) {
    var password = passwordArray += randomChar(selectionsArray);
    console.log(password);
  }
  return password;
}  

  function writePassword () {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
  
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
