  function checkNAN(data) {
	  if (isNaN(parseInt(data))) {
		returnVal = 0;
	  } else {
		returnVal = parseInt(data);
	  }
	  return returnVal;
}