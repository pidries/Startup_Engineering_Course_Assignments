#!/usr/bin/env node
var fs = require('fs');

var NUMBER_OF_PRIMES_TO_GENERATE = 100;

var lastNumber = 0;
var outputFile = "primenumbers.txt";
var primeNumberArray = new Array();

var isNumberAPrimeNumber = function(number) {
	// If the number is less than '2' it is no prime number.
	if (number < 2) {
		return false;
	}
	// If the number equals '2' it is a prime number.
	if (number == 2 ) {
		return true;
	}
	// If the number is dividable without a remainder it is no prime number.
	for (var i = 2; i < number; i++) {
		if (number % i == 0) {
			return false;
		}
	}
	return true;
}

while (primeNumberArray.length < NUMBER_OF_PRIMES_TO_GENERATE) {
	if (isNumberAPrimeNumber(++lastNumber)) {
		primeNumberArray.push(lastNumber);
	}
}

fs.writeFileSync(outputFile, primeNumberArray.join());

