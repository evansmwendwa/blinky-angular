import { Injectable } from '@angular/core';
import { Http, Headers, Response, Request } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { MessageService } from './message.service';

@Injectable()
export class HttpClient {

    constructor(private http: Http, private messageService: MessageService) { }

    public get(url: string): Observable<any> {
        return this.http.get(url)
            .map(res => this.processRequest(res))
            .catch(err => this.logError(err));
    }

    private processRequest(res: Response): void {
        let body = res.json();
        return body || {};
    }

    private logError(error: Response| any) {
        // handle authentication error
        if(error.hasOwnProperty('status')) {
            if(error.status == 401) {
                return Observable.throw('Unauthorized Server Request');
            }
        }

        let errorLabel: string = 'Bummer!';
        let errMsg: string;
        let defaultMessage: string = 'There was a problem completing your request. Please try reloading the page'

        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);

            if(error.status == 0 || error.status == -1) {
                errorLabel = 'Network Problem!';
            }
            errMsg = error.statusText;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }

        errMsg = errMsg ? errMsg : defaultMessage;

        this.messageService.setMessage(errMsg,errorLabel,'danger');

        return Observable.throw(errMsg);
    }

}
