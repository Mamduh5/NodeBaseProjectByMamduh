// base custom error class
import  getErrorMessage  from '../utils/responses/errorMessage.js';

export default class CustomError extends Error {
  constructor(message, statusCode = 500) {
    // message = getErrorMessage(errorKey, lang);
    super(message);
    this.statusCode = statusCode;
    Error.captureStackTrace(this, this.constructor);
  }
}
