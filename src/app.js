// src/app.js
import Koa from 'koa';
import Router from '@koa/router';
import bodyParser from 'koa-bodyparser';
import dotenv from 'dotenv';

dotenv.config();

const app = new Koa();
const router = new Router();



// Middleware
app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
