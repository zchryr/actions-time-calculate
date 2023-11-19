// Node.js script to delete now.txt and timeElapsed.json files

const fs = require('fs');
const path = require('path');

// Paths to the files
const nowTxtPath = path.join(__dirname, 'now.txt');
const timeElapsedJsonPath = path.join(__dirname, 'timeElapsed.json');

// Function to delete a file if it exists
function deleteFile(filePath) {
  try {
    fs.unlinkSync(filePath);
    console.log(`Deleted file: ${filePath}`);
  } catch (err) {
    // This will catch any error, such as the file not existing
    console.error(`Error deleting file ${filePath}:`, err.message);
  }
}

// Delete the files
deleteFile(nowTxtPath);
deleteFile(timeElapsedJsonPath);
