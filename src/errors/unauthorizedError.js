// unauthorized error

import CustomError from './customError.js';

class UnauthorizedError extends CustomError {
    constructor(message = 'Unauthorized access') {
        super(401, message);

    }
}

export default UnauthorizedError;