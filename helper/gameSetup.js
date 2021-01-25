function setupGame() {
	console.log("single game");
	turnLimit = 0;
	playerScore = -1;
	computerScore = -1;
	updateScores("Player");
	updateScores("Computer");
	
  $('#computer').addClass('hidden');  
  $('#result').empty();
  
	playerCardNumber = randomNumber();
	computerCardNumber = randomNumber();
	cardSetup(playerCardNumber, computerCardNumber);


};