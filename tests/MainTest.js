var testURL, testURLID, testURLCheck, randomNumberCheck, duplicationCheck, compURL;
	var playerScore;
	var computerScore;
	var playerCard;
	var computerCard;
$(document).ready(function() {
  //StartTest();  
  $('#StartTest').on('click', startTest);
  
});


function startTest() {
	playerScore = 0;
	computerScore = 0;
	testURLID = 1;
	testURL = getURL(testURLID);
	
	//checking the URL is getting generated correctly	
	testURLCheck = "https://swapi.dev/api/people/1/";
	if (testURL === testURLCheck) {
		 $('#TestingAPI').html("Working Correctly");	
	} else {
		$('#TestingAPI').html("Not working Correctly");	
	}
	//checking the random number generator is between the correct boundaries 
	randomNumberCheck = randomNumber();
	if (randomNumberCheck > 0 || randomNumberCheck < 83) {
		$('#RandomNumGen').html("Working Correctly");	
	} else {
		$('#RandomNumGen').html("Not working Correctly");	
	}
	//checking if the card presented gets changed when its a duplicate
	compURL = testURL;
	duplicationCheck = checkDuplicate(testURL, compURL);
	if (compURL !== testURL) {
		$('#Duplication').html("Working Correctly");	
	} else {
		$('#Duplication').html("Not working Correctly");	
	}
	
	//checking the scores are set to 0 at the start
	var element = document.getElementById("iframe");
	var playerScoreCounter =  iframe.contentWindow.document.getElementById("playerScore").innerHTML;
	var computerScoreCounter =  iframe.contentWindow.document.getElementById("computerScore").innerHTML;
	
	if (playerScoreCounter === "0" && computerScoreCounter === "0") {
		$('#Scores').html("both set to 0");	
	} else if (playerScoreCounter === "0" && computerScoreCounter !== "0") {
		$('#Scores').html("Player set to 0 computer not set");	
	} else if (playerScoreCounter !== "0" && computerScoreCounter === "0") {
		$('#Scores').html("Computer set to 0 player not set");	
	} else {
		$('#Scores').html("Scores not set correctly");	
	}
	//checking if the score gets updated
	updateScores("Player");
	iframe.contentWindow.document.getElementById("playerScore").innerHTML = playerScore;
	playerScoreCounter =  iframe.contentWindow.document.getElementById("playerScore").innerHTML;
	if (playerScoreCounter === "1") {
		$('#PlayerScore').html("Score updated for player");	
	} else {
		$('#PlayerScore').html("Score didn't update for player");	
	}
	
	updateScores("Computer");
	iframe.contentWindow.document.getElementById("playerScore").innerHTML = computerScore;
	computerScoreCounter =  iframe.contentWindow.document.getElementById("playerScore").innerHTML;
	if (playerScoreCounter === "1") {
		$('#ComputerScore').html("Score updated for Computer");	
	} else {
		$('#ComputerScore').html("Score didn't update for Computer");	
	}
	

	//checking the name is generated as part of the initialisation of the game
	var playerCardName = iframe.contentWindow.document.getElementById("player-name").innerHTML;
	if (playerCardName === undefined || playerCardName === null) {
		$('#PlayerCardName').html("Didn't update correctly");	
	} else {
		$('#PlayerCardName').html("Updated Correctly");	
	}
	
	//check if the results panel is displayed
	iframe.contentWindow.document.getElementById("height").click();
	pause(2000);
	if (iframe.contentWindow.document.getElementById("result") !== null) {
		$('#resultsText').html("Has content");	
	} else {
		$('#resultsText').html("Doesn't have content");	
	}
	
	//checking if the card has changed when next card is called (this might not always pass due to duplication)
	iframe.contentWindow.document.getElementById("nextCard").click();
	DelayedTest(playerCardName);

}

function pause(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function DelayedTest(cardToCheck) {
  await sleep(2000);
  	var newPlayerCardName = iframe.contentWindow.document.getElementById("player-name").innerHTML;
	if (newPlayerCardName === cardToCheck) {
		$('#PlayerCardNameChange').html("Didn't update correctly");	
	} else {
		$('#PlayerCardNameChange').html("Updated Correctly");	
	}
}
