export class LogEntry {

    // Public Properties
    entryDate: Date = new Date();
    message = '';
    level: LogLevel = LogLevel.Debug;
    extraInfo: any[] = [];
    logWithDate = true;

    buildLogString(): string {
        let ret = '';

        if (this.logWithDate) {
            ret = new Date() + ' - ';
        }
        ret += 'Type: ' + LogLevel[this.level];
        ret += ' - Message: ' + this.message;
        if (this.extraInfo.length) {
            ret += ' - Extra Info: '
                + this.formatParams(this.extraInfo);
        }

        return ret;
    }

    private formatParams(params: any[]): string {
        let ret: string = params.join(',');

        // Is there at least one object in the array?
        if (params.some(p => typeof p === 'object')) {
            ret = '';
            // Build comma-delimited string
            for (const item of params) {
                ret += JSON.stringify(item, Object.getOwnPropertyNames(item)) + ',';
            }
        }

        return ret;
    }
}

export enum LogLevel {
    All = 0,
    Debug = 1,
    Info = 2,
    Warn = 3,
    Error = 4,
    Fatal = 5,
    Off = 6
}