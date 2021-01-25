function formatDisplay(player, computer) {
	$('#player-name').html(player.name);
	$('#player-height').html(player.height);
	$('#player-mass').html(player.mass);
	$('#player-birth_year').html(player.birth_year);
	$('#computer-name').html(computer.name);
	$('#computer-height').html(computer.height);
	$('#computer-mass').html(computer.mass);
	$('#computer-birth_year').html(computer.birth_year);
	
};