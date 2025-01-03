import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

interface Version {
    version: string;
}

@Injectable({
    providedIn: 'root',
})
export class AppVersionService {

    http = inject(HttpClient);

    constructor() { }

    getVersion(): Observable<Version> {
        return this.http.get<Version>('/assets/version.json');
    }
}