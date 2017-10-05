"use strict";

let $ = require("../lib/node_modules/jquery/dist/jquery.js");
const getCatData = require('./xhr.js');

const eventz = () => {
	let numOfCatz = 1;
	$('button#btn-enter').on('click', function(){
		numOfCatz = parseInt($('input#input-catz').val());
		getCatData(numOfCatz);  // gets cat data
	});
};

module.exports = eventz;