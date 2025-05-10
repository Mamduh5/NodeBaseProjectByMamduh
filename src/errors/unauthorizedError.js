// unauthorized error

import CustomError from './customError.js';

class UnauthorizedError extends CustomError {
    constructor(message = 'Unauthorized access') {
        super( message, 401 );

    }
}

export default UnauthorizedError;