// middleware/errorHandler.js
import CustomError from '../errors/customError.js';
import NotFoundError from '../errors/notFoundError.js';
import UnauthorizedError from '../errors/unauthorizedError.js';

const errorHandler = async (ctx, next) => {
  try {
    await next(); // Let routes and other middleware run first

    // Only check for 404 after next() completes
    if (ctx.status === 404 && ctx.body === undefined) {
      throw new NotFoundError(`Route ${ctx.method} ${ctx.path} not found`);
    }

  } catch (err) {
    // console.error(err); // log to console clearly

    // set default status & message
    let status = err.statusCode || err.status || 500;
    let message = err.message || 'Internal Server Error';
    let errorType = 'InternalServerError';

    // handle custom errors explicitly
    if (err instanceof NotFoundError) {
      errorType = 'NotFoundError';
      status = 404;
    } else if (err instanceof UnauthorizedError) {
      errorType = 'UnauthorizedError';
      status = 401;
    } else if (err instanceof CustomError) {
      errorType = 'CustomError';
      status = err.statusCode || 400;
    }

    // standardized structured error response
    ctx.status = status;
    ctx.body = {
      success: false,
      message,
      error: errorType,
    };

    // emit event for global logging (optional but recommended)
    ctx.app.emit('error', err, ctx);
  }
};

export default errorHandler;
