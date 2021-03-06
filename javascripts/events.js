"use strict";

let $ = require("../lib/node_modules/jquery/dist/jquery.js");
const getCatData = require('./xhr.js');

$('#btn-hide-catz').hide();  // initially hide button for disabled cats

const eventz = () => {
	let numOfCatz = 1;
// gets number of cats requsted on button click
	$('#btn-get-catz').on('click', function() {
		numOfCatz = parseInt($('#inp-get-catz').val());
		getCatData(numOfCatz);  // gets cat data
		$(this).hide();
		$('#inp-get-catz').hide();
		$('#lab-get-catz').hide();
		$('#btn-hide-catz').show();
	});

// clears input field
	$('input#input-catz').on('focus', function() {
		if($(this).val()) {
			$(this).val('');
		}
	});
// gets number of cats requsted on enter key down
	$('#inp-get-catz').on('keydown', function(e) {
		if(e.keyCode === 13 && $('#inp-get-catz').val()) {
			numOfCatz = parseInt($('#inp-get-catz').val());
			getCatData(numOfCatz);  // gets cat data
			$(this).hide();
			$('#lab-get-catz').hide();
			$('#btn-get-catz').hide();
			$('#btn-hide-catz').show();
		}
	});
// hides cats with < 10 toes
	$('#btn-hide-catz').on('click', function() {
		$('.disabled-cat').parent().parent().css('visibility', 'hidden');
	});
};

module.exports = eventz;