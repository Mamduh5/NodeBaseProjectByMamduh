import fs from 'fs';
import path from 'path'
import { __dirname } from '../globals.js';
import { getLanguage } from '../language.js';  // Import the language helper
import { get } from 'http';

console.log(__dirname);

const ctx = {
  headers: {
    'accept-language': 'th'
  }
};
console.log(getLanguage(ctx), "getLanguage");

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
const getErrorMessage = async (errorKey, ctx) => {
  const lang = await getLanguage(ctx);
  console.log(lang, "getLanguage222");
  
  console.log(errorKey, "errorKey");
  
  const errorMessages = loadErrorMessages();


  console.log(errorMessages[errorKey]?.[lang]);
  
  return errorMessages[errorKey]?.[lang] || 'An unknown error occurred';
};

export default getErrorMessage;
