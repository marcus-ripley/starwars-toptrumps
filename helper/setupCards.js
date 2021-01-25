function cardSetup(playerID, compID) {
	playerURL = getURL(playerID);
	compURL = getURL(compID);

	checkDuplicate(playerURL, compURL);
 
   $.when($.getJSON(playerURL, function(data) {

    }),
    $.getJSON(compURL, function(json) {

    })).then(function(player, computer) {
    playerCard = player[0];
    computerCard = computer[0];
    
    $('#buttons button').removeClass('disabled');
	
    formatDisplay(playerCard, computerCard);
})
};