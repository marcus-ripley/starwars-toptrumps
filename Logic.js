// This script controls the mechanics behind a "top trumps"-style game.
// Developed by the data journalism team of the Hessischer Rundfunk in 2018

/*  Copyright (C) 2018  Till Hafermann, Miguel Pascual Sanina, hr-Datenteam

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

// CUSTOMIZATION: To build your own game, change the text to display

var playerURL, compURL, playerCard, computerCard, playerScore, computerScore, turnLimit, cardNumber;

  $('#height').on('click', function() {
	var pHeight = (checkNAN(playerCard.height));
	var cHeight = (checkNAN(computerCard.height));
	if (turnLimit === 0) {
		compare(pHeight, cHeight);
		turnLimit++;
	}
  });
  $('#mass').on('click', function() {
	var pMass = (checkNAN(playerCard.mass));
	var cMass = (checkNAN(computerCard.mass));
	if (turnLimit === 0) {
		compare(pMass, cMass);
		turnLimit++;
	}
  });
  $('#birth_year').on('click', function() {
	var pBirthyear = (checkNAN(playerCard.birth_year));
	var cBirthyear = (checkNAN(computerCard.birth_year));
	if (turnLimit === 0) {
		compare(pBirthyear, cBirthyear);
		turnLimit++;
	}
  });
  

$(document).ready(function() {
  setupGame();  
  $('#reset').on('click', setupGame);
  $('#nextCard').on('click', nextCard);
});


