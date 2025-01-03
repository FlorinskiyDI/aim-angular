import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({ providedIn: 'root' })

export class GlobalErrorService {

    private _errorSubject$ = new Subject<any[]>();
    public error$ = this._errorSubject$.asObservable();
  
    pushError(data: any) {
      this._errorSubject$.next(data)  
    }
}