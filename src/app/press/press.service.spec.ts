/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PressService } from './press.service';
import { AppTestingModule } from '../test.module';

describe('PressService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                AppTestingModule
            ]
        });
    });

    it('should ...', inject([PressService], (service: PressService) => {
        expect(service).toBeTruthy();
    }));
});
