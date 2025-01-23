import { Request, Response, NextFunction } from 'express';
import { logger } from '../utils/logger';
import * as Sentry from '@sentry/node';

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.error(err.message, { error: err, stack: err.stack });

  if (process.env.SENTRY_DSN) {
    Sentry.captureException(err);
  }

  res.status(500).json({
    status: 'error',
    message: process.env.NODE_ENV === 'production' 
      ? 'Internal server error' 
      : err.message,
  });
};