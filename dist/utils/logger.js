import chalk from "chalk";
const logLevels = {
    error: "error",
    warn: "warn",
    info: "info",
    debug: "debug",
};
class Logger {
    getTimestamp() {
        return new Date().toISOString();
    }
    formatMessage(level, message, meta) {
        const timestamp = this.getTimestamp();
        const metaString = meta ? ` ${JSON.stringify(meta)}` : "";
        return `${timestamp} [${level.toUpperCase()}] ${message}${metaString}`;
    }
    error(message, meta) {
        console.error(chalk.red(this.formatMessage("error", message, meta)));
    }
    warn(message, meta) {
        console.warn(chalk.yellow(this.formatMessage("warn", message, meta)));
    }
    info(message, meta) {
        console.info(chalk.blue(this.formatMessage("info", message, meta)));
    }
    debug(message, meta) {
        console.debug(chalk.gray(this.formatMessage("debug", message, meta)));
    }
    success(message, meta) {
        console.info(chalk.green(this.formatMessage("info", message, meta)));
    }
}
export const logger = new Logger();
//# sourceMappingURL=logger.js.map