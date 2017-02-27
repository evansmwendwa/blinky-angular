/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PressService } from './press.service';
import { HttpClient } from '../shared/http-client.service';

describe('PressService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [PressService, HttpClient]
        });
    });

    it('should ...', inject([PressService], (service: PressService) => {
        expect(service).toBeTruthy();
    }));
});
