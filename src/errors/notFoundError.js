// not found error

import CustomError from './customError.js';

class NotFoundError extends CustomError {
    constructor(message) {
        super(404, message);
    }
}

export default NotFoundError;