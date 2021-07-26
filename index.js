"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
class Logger {
    constructor(config) {
        this.config = config;
    }
    getConfig() {
        return this.config;
    }
    writeToFile(content) {
        try {
            fs_1.default.appendFile(path_1.default.join(__dirname, '../../../', this.config.logFilePath), content, err => {
                if (err) {
                    console.error(err);
                    return;
                }
            });
        }
        catch (error) {
            console.log(error);
        }
    }
    //	An event that describes the successful operation of a task, such as an application, driver, or service. For example,
    //	an Information event is logged when a network driver loads successfully.
    info(logParams) {
        const date = new Date();
        const log = {
            type: "INFO",
            date: `${date.toDateString()} ${date.toTimeString()}`,
            ip: logParams.ip || '',
            message: logParams.message,
            user: logParams.user || "",
            url: logParams.url || ''
        };
        const messageToLog = `${log.type}: ${log.date}. ${log.message}. User: ${log.user}. Ip: ${log.ip}. URL: ${log.url}`;
        this.writeToFile(messageToLog);
    }
    //An event that is not necessarily significant, however, may indicate the possible occurrence of a future problem.
    // For example, a Warning message is logged when disk space starts to run low
    warn(logParams) {
        const date = new Date();
        const log = {
            type: "WARN",
            date: `${date.toDateString()} ${date.toTimeString()}`,
            ip: logParams.ip || '',
            message: logParams.message,
            user: logParams.user || '',
            url: logParams.url || ''
        };
        const messageToLog = `${log.type}: ${log.date}. ${log.message}. User: ${log.user}. Ip: ${log.ip}. TargetURL: ${log.url}`;
        this.writeToFile(messageToLog);
    }
    //An event that indicates a significant problem such as loss of data or loss of functionality.
    // For example, if a service fails to load during startup, an Error event is logged.
    error(logParams) {
        const date = new Date();
        const log = {
            type: "ERROR",
            date: `${date.toDateString()} ${date.toTimeString()}`,
            ip: logParams.ip || '',
            message: logParams.message,
            user: logParams.user || '',
            url: logParams.url || '',
            info: logParams.info || ''
        };
        const messageToLog = `${log.type}: ${log.date}. ${log.message}. User: ${log.user}. Ip: ${log.ip}. TargetURL: ${log.url}`;
        this.writeToFile(messageToLog);
    }
}
module.exports = Logger;
//# sourceMappingURL=index.js.map