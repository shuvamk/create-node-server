import 'module-alias/register';
import { config } from './config/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { setupSentry } from './config/sentry';
import { initTelemetry } from './config/opentelemetry';
import { logger } from './utils/logger';
import { errorHandler } from './middleware/errorHandler';
import { notFoundHandler } from './middleware/notFoundHandler';
import { healthRoutes } from './routes/health';
import { RegisterRoutes } from './routes/routes';
import swaggerUi from 'swagger-ui-express';
import { readFileSync } from 'fs';
import { join } from 'path';
import chalk from 'chalk';

// Initialize monitoring and tracing if enabled
if (config.sentry.dsn) {
  setupSentry();
}

if (config.telemetry.endpoint) {
  initTelemetry();
}

const app = express();

// Load Swagger JSON
const swaggerDocument = JSON.parse(
  readFileSync(join(__dirname, '../swagger.json'), 'utf-8'),
);

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health routes
app.use('/api', healthRoutes);

// Swagger documentation
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Routes
RegisterRoutes(app);

// Error handling
app.use(notFoundHandler);
app.use(errorHandler);

const port = config.port;

app.listen(port, () => {
  logger.info(
    `🚀 Server is running in ${chalk.yellow(config.nodeEnv)} mode on port ${chalk.green(port.toString())}`,
  );
  logger.info(
    `📚 API Documentation available at ${chalk.blue(`http://localhost:${port}/docs`)}`,
  );
  logger.info(
    `🏥 Health check available at ${chalk.blue(`http://localhost:${port}/api/health`)}`,
  );
});
