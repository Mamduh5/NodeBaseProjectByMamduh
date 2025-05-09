// not found error

import CustomError from './customError.js';

class NotFoundError extends CustomError {
    constructor(message = 'Resource not found') {
        super(404, message);
    }
}

export default NotFoundError;