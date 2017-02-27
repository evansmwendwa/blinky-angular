/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClient } from './http-client.service';
import { AppTestingModule } from '../test.module';


describe('HttpClientService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                AppTestingModule
            ]
        });
    });

    it('should ...', inject([HttpClient], (service: HttpClient) => {
        expect(service).toBeTruthy();
    }));
});
