// calculate.js - Reads the TIME_NOW environment variable and calculates the elapsed time

const core = require('@actions/core');

// Read the TIME_NOW environment variable
const savedEpochTime = parseInt(core.getInput('TIME_NOW'));

// Get the current epoch time in seconds
const currentEpochTime = Math.floor(new Date().getTime() / 1000);

// Calculate the time difference in seconds
const timeDifference = currentEpochTime - savedEpochTime;

// Convert the time difference to minutes and seconds
const minutes = Math.floor(timeDifference / 60);
const seconds = timeDifference % 60;

// Prepare the result as a JSON object
const result = JSON.stringify({
  minutes: minutes,
  seconds: seconds,
});

// Use @actions/core to set the output
core.setOutput('TIME_CALCULATED', result);
