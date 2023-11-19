// Node.js script to write the current epoch time to a file called now.txt

const fs = require('fs');

// Create a new Date object to get the current time
const now = new Date();

// Get the time in milliseconds since the Unix epoch and convert it to seconds
const epochTimeInSeconds = Math.floor(now.getTime() / 1000);

// Write the epoch time to now.txt
fs.writeFileSync('now.txt', epochTimeInSeconds.toString());

console.log('Epoch time written to now.txt');
