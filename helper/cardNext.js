function nextCard() {
	playerCardNumber = randomNumber();
	computerCardNumber = randomNumber();
	cardSetup(playerCardNumber, computerCardNumber);
	turnLimit = 0;
	$('#computer').addClass('hidden');  
	$('#result').empty();
	$('#nextCard').addClass('disabled');
	$('#buttons button').removeClass('disabled');
  }