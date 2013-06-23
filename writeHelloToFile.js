#!/usr/bin/env node
var fs = require('fs');
var outputFile = "output.txt";
var outputMessage = "A startup is a business built to grow rapidly.\n";
fs.writeFileSync(outputFile, outputMessage);
console.log("Script: " + __filename + "\nWrote: " + outputMessage + "To : " + outputFile);
