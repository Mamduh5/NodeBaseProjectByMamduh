// not found error

import CustomError from './customError.js';

class NotFoundError extends CustomError {
    constructor(message) {
        super( message, 404 );
    }
}

export default NotFoundError;