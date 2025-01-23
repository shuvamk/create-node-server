import { Router } from 'express';
import { logger } from '@/utils/logger';

const router = Router();

router.get('/health', (req, res) => {
  logger.info('Health check requested');
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
});

router.get('/health/deep', async (req, res) => {
  logger.info('Deep health check requested');
  
  try {
    // Add your deep health checks here (e.g., database connection)
    res.json({
      status: 'ok',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      services: {
        // Add service checks here
        api: 'ok',
      },
    });
  } catch (error) {
    logger.error('Deep health check failed', { error });
    res.status(503).json({
      status: 'error',
      message: 'Service unavailable',
    });
  }
});

export const healthRoutes = router;