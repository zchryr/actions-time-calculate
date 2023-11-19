// Node.js script to read epoch time from now.txt, compare with current time, and output the difference to a JSON file

const fs = require('fs');

// Read the epoch time from now.txt
const savedEpochTime = parseInt(fs.readFileSync('now.txt', 'utf8'));

// Get the current epoch time in seconds
const currentEpochTime = Math.floor(new Date().getTime() / 1000);

// Calculate the time difference in seconds
const timeDifference = currentEpochTime - savedEpochTime;

// Convert the time difference to minutes and seconds
const minutes = Math.floor(timeDifference / 60);
const seconds = timeDifference % 60;

// Prepare the result as a JSON object
const result = {
  minutes: minutes,
  seconds: seconds,
};

// Write the result to a JSON file
fs.writeFileSync('timeElapsed.json', JSON.stringify(result, null, 2));

console.log('Time elapsed written to timeElapsed.json');
