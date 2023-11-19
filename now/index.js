// now.js - Sets the current epoch time as an environment variable

const core = require('@actions/core');

// Get the current epoch time in seconds
const currentEpochTime = Math.floor(new Date().getTime() / 1000);

// Use @actions/core to set the output
core.setOutput('TIME_NOW', currentEpochTime.toString());
