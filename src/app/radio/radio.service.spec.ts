/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RadioService } from './radio.service';

describe('RadioService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [RadioService]
        });
    });

    it('should ...', inject([RadioService], (service: RadioService) => {
        expect(service).toBeTruthy();
    }));
});
