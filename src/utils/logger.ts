import chalk from "chalk";

const logLevels = {
  error: "error",
  warn: "warn",
  info: "info",
  debug: "debug",
} as const;

type LogLevel = keyof typeof logLevels;

class Logger {
  private getTimestamp(): string {
    return new Date().toISOString();
  }

  private formatMessage(level: LogLevel, message: string, meta?: any): string {
    const timestamp = this.getTimestamp();
    const metaString = meta ? ` ${JSON.stringify(meta)}` : "";
    return `${timestamp} [${level.toUpperCase()}] ${message}${metaString}`;
  }

  error(message: string, meta?: any): void {
    console.error(chalk.red(this.formatMessage("error", message, meta)));
  }

  warn(message: string, meta?: any): void {
    console.warn(chalk.yellow(this.formatMessage("warn", message, meta)));
  }

  info(message: string, meta?: any): void {
    console.info(chalk.blue(this.formatMessage("info", message, meta)));
  }

  debug(message: string, meta?: any): void {
    console.debug(chalk.gray(this.formatMessage("debug", message, meta)));
  }

  success(message: string, meta?: any): void {
    console.info(chalk.green(this.formatMessage("info", message, meta)));
  }
}

export const logger = new Logger();
