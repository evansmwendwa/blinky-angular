/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RadioService } from './radio.service';
import { AppTestingModule } from '../test.module';

describe('RadioService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                AppTestingModule
            ]
        });
    });

    it('should ...', inject([RadioService], (service: RadioService) => {
        expect(service).toBeTruthy();
    }));
});
