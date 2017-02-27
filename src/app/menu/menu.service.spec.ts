/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MenuService } from './menu.service';
import { AppTestingModule } from '../test.module';

describe('MenuService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                AppTestingModule
            ]
        });
    });

    it('should ...', inject([MenuService], (service: MenuService) => {
        expect(service).toBeTruthy();
    }));
});
