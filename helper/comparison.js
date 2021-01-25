function compare(Player, Computer) {
  $('#computer').removeClass('hidden');
  if (Player > Computer) {
    $('#result').html("You Win");
	console.log("player scored: " + playerScore);
	updateScores("Player");
	$('#computerScore').removeClass('hidden');
  } else if (Computer > Player) {
    $('#result').html("You Lose");
	console.log("player scored: " + computerScore);
	updateScores("Computer");
  } else if (Player === Computer) {
    $('#result').html("A Tie");
  } else {
    $('#result').html("Something has broken");
  }
  $('#buttons button').addClass('disabled');
  	$('#nextCard').removeClass('disabled');
}