// Variable declarations
var winCounter = 0;
var lossCounter = 0;
var guessesLeft = 10;

var letterArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
	 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var lettersUsed = [];

var letter;

document.getElementById("wins").innerHTML = "Wins: " + winCounter;
document.getElementById("loses").innerHTML = "Loses: " + lossCounter;
document.getElementById("guesses").innerHTML = "Guesses left: " + guessesLeft;
document.getElementById("used").innerHTML = "Letters used: " + lettersUsed;

function compLetter()
{
	letter = letterArray[Math.floor(Math.random() * letterArray.length)];
	
	document.getElementById("letters").innerHTML = letter;
	console.log(letter);
}


document.onkeyup = function(event)
{
	var userGuess = event.key;

	if(lettersUsed.includes(userGuess))
	{
		alert("You already used this letter");
	}
		
	else if(userGuess != letter)
	{
		alert("Incorrect");
		guessesLeft--;
		lettersUsed.push(userGuess);

		document.getElementById("guesses").innerHTML = "Guesses left: " + guessesLeft;
		document.getElementById("used").innerHTML = "Letters used: " + lettersUsed;

		if(guessesLeft == 0)
		{
			lossCounter++;

			document.getElementById("loses").innerHTML = "Loses: " + lossCounter;

			lettersUsed.length = 0;
			document.getElementById("used").innerHTML = "Letters used: " + lettersUsed;

			alert("The Amazing Salvio has bested you!");

			guessesLeft += 10;
			document.getElementById("guesses").innerHTML = "Guesses left: " + guessesLeft;

			compLetter();
		}

	}

	else if(userGuess == letter)
	{
		alert("You have bested the Amazing Salvio! Great job!");

		winCounter++;
		document.getElementById("wins").innerHTML = "Wins: " + winCounter;

		lettersUsed.length = 0;
		document.getElementById("used").innerHTML = "Letters used: " + lettersUsed;

		guessesLeft = 10;
		document.getElementById("guesses").innerHTML = "Guesses left: " + guessesLeft;

		compLetter();
	}
};