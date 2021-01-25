function updateScores (user) {
	console.log(user);	
	if (user === "Player") {
		playerScore ++;
		$('#playerScore').html(playerScore);
	} else {
		computerScore ++;
		$('#computerScore').html(computerScore);
	}
}