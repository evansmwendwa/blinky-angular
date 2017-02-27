/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StateService } from './state.service';
import { AppTestingModule } from '../test.module';

describe('StateService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                AppTestingModule
            ]
        });
    });

    it('should ...', inject([StateService], (service: StateService) => {
        expect(service).toBeTruthy();
    }));
});
