declare class Logger {
    private getTimestamp;
    private formatMessage;
    error(message: string, meta?: any): void;
    warn(message: string, meta?: any): void;
    info(message: string, meta?: any): void;
    debug(message: string, meta?: any): void;
    success(message: string, meta?: any): void;
}
export declare const logger: Logger;
export {};
