// Michael Mouet - JS Number Counter JavaScript

// INSTRUCTIONS
// Build a simple counter.
// The count starts at 0
// Have two buttons on the screen, one to increase (+) the count by 1, and one button to lower (-) the count by 1.
// Pressing the plus button increases the count by 1, pressing the minus button decreases by 1

// PLANNING: 	
// Write two functions, one to add and one to subtract 
// Attach each function to a getElementById() to change the HTML value shown
// add inner html
// Write out variable representing the counter outside of function


let counter = 0

const addOne = () => {
	counter++
	document.getElementById("p1").innerHTML = counter

};

const subtractOne = () => {
	counter--
	document.getElementById("p1").innerHTML = counter
};

