// error handler middleware where we use the custom error classes

import CustomError from '../errors/customError.js';
import NotFoundError from '../errors/notFoundError.js';
import UnauthorizedError from '../errors/unauthorizedError.js';
// Centralized error handling middleware
const errorHandler = async function (ctx, next) {
    try{
        await next();
    } catch (err){
        
        if( err instanceof CustomError ){
            ctx.status = err.statusCode || 500;
            ctx.body = { error: err.message };
        }
        else if (err.status === 404 || ctx.status === 404) {
            ctx.status = 404;
            ctx.body = { error: 'ResourceNotFound' };
        }
        else if (err instanceof UnauthorizedError){
            ctx.status = 401;
            ctx.body = { error: 'Unauthorized access' };
        }
        else{
            ctx.status = 500;
            ctx.body = { error: 'SomethingWentWrong', ctx };
            console.log(err); // Log the unexpected error for debugging
            
        }
        ctx.app.emit('error', err, ctx);
    }
}


const notFoundHandler = async (ctx, next) => {
    await next();  // Proceed to next middleware (if any route matches)
  
    // If no route was matched (status is 404), throw a NotFoundError
    if (ctx.status === 404) {
        throw new NotFoundError('ResourceNotFound', ctx); 
      
    }
  };

export { errorHandler, notFoundHandler };