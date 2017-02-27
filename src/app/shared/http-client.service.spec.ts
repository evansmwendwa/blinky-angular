/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpModule, Http, BaseRequestOptions, XHRBackend } from '@angular/http';
import { HttpClient } from './http-client.service';
import { MockBackend } from '@angular/http/testing';

describe('HttpClientService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpModule],
            providers: [HttpClient, { provide: XHRBackend, useClass: MockBackend }]
        });
    });

    it('should ...', inject([HttpClient], (service: HttpClient) => {
        expect(service).toBeTruthy();
    }));
});
