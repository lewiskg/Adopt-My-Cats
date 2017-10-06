"use strict";

let $ = require("../lib/node_modules/jquery/dist/jquery.js");
const getCatData = require('./xhr.js');

const eventz = () => {
	let numOfCatz = 1;
// gets number of cats requsted on button click
	$('button#btn-enter').on('click', function() {
		numOfCatz = parseInt($('input#input-catz').val());
		getCatData(numOfCatz);  // gets cat data
	});

// clears input field
	$('input#input-catz').on('focus', function() {
		if($(this).val()) {
			$(this).val('');
		}
	});
// gets number of cats requsted on enter key down
	$('input#input-catz').on('keydown', function(e) {
		if(e.keyCode === 13 && $('input#input-catz').val()) {
			numOfCatz = parseInt($('input#input-catz').val());
			getCatData(numOfCatz);  // gets cat data
			$('input#input-catz').blur();	
		}
	});
};

module.exports = eventz;