/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RadioService } from './radio.service';
import { HttpClient } from '../shared/http-client.service';

describe('RadioService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [RadioService, HttpClient]
        });
    });

    it('should ...', inject([RadioService], (service: RadioService) => {
        expect(service).toBeTruthy();
    }));
});
