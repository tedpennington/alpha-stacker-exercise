console.log("hello js")

// Instruction: Create an array that contains the letters of the alphabet
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Instruction: The stackLetter function should accept the array as the sole argument
function stackLetters (alphabet) {
    /*
      Instruction: Write a `for` loop that iterates over the array argument and
      outputs the letters.
     */

     // Ted comment: Declaring variable as an empty string to set the variable type (required for it to work below)
     var alphaString = "";
     for(var i = 0; i < alphabet.length; i++) {
        alphaString += alphabet[i];
         // Ted comment: Had to make this i+1 because can't divide by 0.  This says "if the value of the index counter remainder (when dividing by 3) is zero, then add a space to the variable alphaString"
        if ((i+1) % 3 === 0) {
            alphaString += " ";
        }
        console.log(alphaString);
     }
}

// Instruction: Invoke the function and pass in the array
stackLetters(alphabet)

// EXERCISE COMPLETE