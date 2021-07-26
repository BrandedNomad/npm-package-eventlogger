interface LogParams {
    message: string;
    ip?: string;
    user?: string;
    url?: string;
    info?: string;
}
declare class Logger {
    private config;
    constructor(config: {
        logFilePath: string;
    });
    getConfig(): {};
    private writeToFile;
    info(logParams: {
        ip: undefined | string;
        message: string;
        user: undefined | string;
        url: undefined | string;
        info: undefined | string;
    }): void;
    warn(logParams: LogParams): void;
    error(logParams: LogParams): void;
}
export = Logger;
