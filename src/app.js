// src/app.js
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import dotenv from 'dotenv';
import errorHandler from './middlewares/errorHandler.js';
import tokenRoutes from './routes/token.js';
import logger from './utils/logger.js';
import Router from '@koa/router';


dotenv.config({ path: process.env.ENV_FILE || '.env' });

const app = new Koa();
const router = new Router();
// lang
app.use(errorHandler);

// Parse request bodies
app.use(bodyParser());

// Routes
app.use(tokenRoutes.routes()).use(tokenRoutes.allowedMethods());

app.use(async (ctx) => {
    ctx.status = 404;
    ctx.body = { error: 'Route Not Found' };
});
// global error event (best practice)
app.on('error', (err, ctx) => {
  logger.error(`Server Error: ${err.message}`, {
    method: ctx.method,
    url: ctx.url,
    stack: err.stack,
    status: ctx.status,
    ip: ctx.ip,
  });
});

// Start server
const PORT = process.env.PORT || 3000;
console.log( process.env.PORT, "PORT" );

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
