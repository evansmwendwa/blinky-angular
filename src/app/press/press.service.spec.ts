/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PressService } from './press.service';

describe('PressService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [PressService]
        });
    });

    it('should ...', inject([PressService], (service: PressService) => {
        expect(service).toBeTruthy();
    }));
});
