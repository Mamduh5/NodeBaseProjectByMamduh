import Router from '@koa/router';
import { login } from '../controllers/authController.js';
import NotFoundError from '../errors/notFoundError.js'; // Import custom errors

const router = new Router({ prefix: '/token' });

router.post('/login', 
    login,
    async (ctx) => {

      ctx.body = { message: 'login test route reached' }; // ✅ send something

  });

router.get('/test/header', 
    async (ctx) => {
      console.log(ctx.headers['accept-language']);
      
      ctx.body = { message: 'Header test route reached' }; // ✅ send something
});

export default router;
