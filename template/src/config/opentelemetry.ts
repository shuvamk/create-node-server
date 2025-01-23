import { NodeSDK } from '@opentelemetry/sdk-node';
import { getNodeAutoInstrumentations } from '@opentelemetry/auto-instrumentations-node';
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http';
import { config } from './config';
import chalk from 'chalk';

export const initTelemetry = () => {
  if (config.nodeEnv === 'test') return;

  const sdk = new NodeSDK({
    traceExporter: new OTLPTraceExporter({
      url: config.telemetry.endpoint,
    }),
    instrumentations: [getNodeAutoInstrumentations()],
    serviceName: config.telemetry.serviceName,
  });

  sdk.start();

  process.on('SIGTERM', () => {
    sdk.shutdown()
      .then(() => console.log(chalk.yellow('Tracing terminated')))
      .catch((error) => console.error(chalk.red('Error terminating tracing'), error))
      .finally(() => process.exit(0));
  });
};