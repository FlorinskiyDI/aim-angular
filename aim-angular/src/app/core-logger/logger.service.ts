import { Injectable, Inject } from '@angular/core';
import { LogPublisher, LogPublisherService } from './log-publisher';
import { LogEntry, LogLevel } from './log-publisher/log.entry';

@Injectable({ providedIn: 'root' })
export class LoggerService {

    level: LogLevel = LogLevel.All;
    logWithDate = true;
    publishers: LogPublisher[];

    constructor(
        private publishersService: LogPublisherService,
        @Inject('LOGS') private logs: boolean) {
        // set publishers
        this.publishers = this.publishersService.publishers;
    }


    debug(msg: string, ...optionalParams: any[]) {
        this.writeToLog(msg, LogLevel.Debug,
            optionalParams);
    }

    info(msg: string, ...optionalParams: any[]) {
        this.writeToLog(msg, LogLevel.Info,
            optionalParams);
    }

    warn(msg: string, ...optionalParams: any[]) {
        this.writeToLog(msg, LogLevel.Warn,
            optionalParams);
    }

    error(msg: string, ...optionalParams: any[]) {
        this.writeToLog(msg, LogLevel.Error,
            optionalParams);
    }

    fatal(msg: string, ...optionalParams: any[]) {
        this.writeToLog(msg, LogLevel.Fatal,
            optionalParams);
    }

    log(msg: string, ...optionalParams: any[]) {
        this.writeToLog(msg, LogLevel.All,
            optionalParams);
    }


    private writeToLog(msg: string, level: LogLevel, params: any[]) {
        if (this.shouldLog(level) && this.logs) {
            const entry: LogEntry = new LogEntry();
            entry.message = msg;
            entry.level = level;
            entry.extraInfo = params;
            entry.logWithDate = this.logWithDate;

            for (const logger of this.publishers) {
                logger.log(entry).subscribe((response: any) => console.log(response));
            }

        }
    }



    private shouldLog(level: LogLevel): boolean {
        let ret = false;
        if ((level >= this.level &&
            level !== LogLevel.Off) ||
            this.level === LogLevel.All) {
            ret = true;
        }
        return ret;
    }
}
