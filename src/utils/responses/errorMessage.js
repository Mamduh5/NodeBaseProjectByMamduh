import fs from 'fs';
import path from 'path'
import { __dirname } from '../globals.js';

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
const getErrorMessage = (errorKey, lang = 'en') => {
  const errorMessages = loadErrorMessages();
  const message = errorMessages[errorKey] ? errorMessages[errorKey][lang] : 'An unknown error occurred';
  return message;
};

export { getErrorMessage };
