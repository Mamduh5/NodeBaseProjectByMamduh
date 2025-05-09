// src/app.js
import Koa from 'koa';
import Router from '@koa/router';
import bodyParser from 'koa-bodyparser';
import dotenv from 'dotenv';
import { errorHandler, notFoundHandler } from './middlewares/errorHandler.js';
import tokenRoutes from './routes/token.js';

dotenv.config();

const app = new Koa();
const router = new Router();

app.use(errorHandler);
app.use(notFoundHandler)

// Parse request bodies
app.use(bodyParser());

// Routes
app.use(tokenRoutes.routes());
app.use(tokenRoutes.allowedMethods());

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
