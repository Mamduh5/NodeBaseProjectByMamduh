import Router from '@koa/router';
import { login } from '../controllers/authController.js';
import NotFoundError from '../errors/notFoundError.js'; // Import custom errors

const router = new Router({ prefix: '/token' });

router.post('/login', 
    login,
    async (ctx) => {
    // Example of throwing a custom error (e.g., User not found)
    throw new NotFoundError('UserNotFound', 'en'); 
  });

export default router;
