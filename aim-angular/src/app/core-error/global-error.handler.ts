import { Injectable, ErrorHandler } from '@angular/core';
import { GlobalErrorService } from './global-error.service';
import { LoggerService } from '../core-logger/logger.service';

@Injectable({ providedIn: 'root' })
export class GlobalErrorHandler implements ErrorHandler {
  
  constructor(
    private globalErrorService: GlobalErrorService,
    private loggerService: LoggerService
  ) { }

  handleError(error: object) {
    this.loggerService.fatal("[GlobalErrorHandler.ts] - Unhandled error!!!", error)
    this.globalErrorService.pushError(error);
  }

}

