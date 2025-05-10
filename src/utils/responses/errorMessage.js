import fs from 'fs';
import path from 'path'
import { __dirname } from '../globals.js';
import { getLanguage } from '../language.js';  // Import the language helper

console.log(__dirname);


/**
 * Load error messages from the JSON file
 */
const loadErrorMessages = () => {
  const filePath = path.join(__dirname, '../data/responseModel/errorResponse.json');
  const rawData = fs.readFileSync(filePath);
  return JSON.parse(rawData); // Return the parsed JSON object
};

/**
 * Function to get an error message based on the error key and language
 * @param {string} errorKey The key representing the error (e.g., 'UserNotFound')
 * @param {string} lang The language (e.g., 'en', 'th')
 * @returns {string} The error message in the specified language
 */
const getErrorMessage = (errorKey, ctx) => {
  const lang = getLanguage(ctx); // Dynamically get language from headers
  const errorMessages = loadErrorMessages();
console.log( ctx.language ,"111" )

  return errorMessages[errorKey]?.[lang] || 'An unknown error occurred';
};

export { getErrorMessage };
