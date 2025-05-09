// base custom error class
import { getErrorMessage } from '../utils/responses/errorMessage.js';
class CustomError extends Error {
    constructor(statusCode, errorKey, lang, isOperational = true) {
        const message = getErrorMessage(errorKey, lang); // Get the message dynamically
        super(message);
        this.statusCode = statusCode;
        this.isOperational = isOperational;
        Error.captureStackTrace(this, this.constructor);

    }
}

export default CustomError;