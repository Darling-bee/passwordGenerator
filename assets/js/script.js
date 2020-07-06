// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // you can create a function named generatePassword that creates the password
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Numbers 0123456789
var numChars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Special Characters !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~
var specChars = ("#!$%&'()*+,-./:;<=>?@[\]^_`{|}~");
var specCharsA = [...specChars];

// Alphabet, Caps and Lower?
var capLetters = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
var lowLetters = capLetters.toLowerCase();
var capLettersA = Array.from(capLetters);
var lowLettersA = Array.from(lowLetters);

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Write the function to generate a password
function generatePassword() {
  var passLength = prompt("How many characters long does your password need to be? Between 8 and 128 characters.")

  //Alert if choice is outside of 8-128 characters
  var passCharNum = parseInt(passLength);
      if (passLength == null || passLength == "") { alert("Password Length must be set!") ; }
      else if (passCharNum <= 8 || passCharNum >= 128) { alert("Password must be between 8 and 128 characters long.") ; }

//Choose characters to include
      else {
        var specCharsB = confirm("Would you like to use Special Characters in your password?");
        var numCharsB = confirm("Would you like to use numbers in your Password?");
        var lowLettersB = confirm("Would you like to use lowercase letters in your Password?");
        var capLettersB = confirm("Would you like to use uppercase letters in your Password?");
        var randoArray = [];
          if (specCharsB) {var randoArray = specCharsA;
            console.log(randoArray);
          } 
          if (numCharsB) {var randoArray = randoArray.concat(numChars);
            console.log(randoArray);
          }
          if (lowLettersB){var randoArray = randoArray.concat(lowLettersA);
            console.log(randoArray)
          }
          if (capLettersB){var randoArray = randoArray.concat(capLettersA);
            console.log(randoArray)
          }
          var i = 0
              do {password =  password + randoArray[Math.floor(Math.random() * randoArray.length)]
                console.log(password);
                i++;
              }
              while (i < passCharNum);}
            
              alert(password)
            }
