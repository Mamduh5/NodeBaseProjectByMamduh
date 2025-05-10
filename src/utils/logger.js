// utils/logger.js
import winston from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';

import path from 'path';

// Ensure log directories exist
const logDir = 'logs';

// setup Winston logger clearly
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    winston.format.errors({ stack: true }),
    winston.format.splat(),
    winston.format.json()
  ),
  transports: [
    // Console transport (shows logs in terminal)
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      )
    }),

    // File transport with daily rotation
    new DailyRotateFile({
      filename: path.join(logDir, 'application', '%DATE%-request.log'),
      datePattern: 'YYYY-MM-DD',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d'
    })
  ],
});

// export logger clearly
export default logger;
