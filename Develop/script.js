// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  var promptLength = window.prompt("How many characters would you like your password to contain?");
        if (promptLength === "" || promptLength === null) {
          window.alert("You must provide a length between 8 - 128 characters. Please try again.");
        }
        else {
          // need help to make sure not string and check b/w 8-128
          promptLength = parseInt(promptLength);
          Number.isInteger(promptLength);
          if (isNaN(promptLength) || promptLength < 8 || promptLength > 128) {
            window.alert("You must provide a number between 8 - 128 characters");
            writePassword();
          }
        }

  var lowercaseConfirm = window.confirm("Would you like your password to include lowercase letters?");
        if (lowercaseConfirm) {
          console.log("include lowercase");
        }
        else {
          console.log("do not include lowercasees");
        }

  var uppercaseConfirm = window.confirm("Would you like your password to include uppercase letters?");
        if (uppercaseConfirm) {
          console.log("include uppercase");
        }
        else {
          console.log("do not include uppercase");
        }

  var numberConfirm = window.confirm("Would you like your password to include numbers?");
        if (numberConfirm) {
          console.log("include numbers");
        }
        else {
          console.log("do not include numbers");
        }

  var specialConfirm = window.confirm("Would you like your password to include special characters?");
        if (specialConfirm) {
          console.log("include special characters");
        }
        else {
          console.log("do not include special characterss");
        }
 


  // from starter code:
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
      
  passwordText.value = password;

        


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
