/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MenuService } from './menu.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('MenuService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            providers: [MenuService]
        });
    });

    it('should ...', inject([MenuService], (service: MenuService) => {
        expect(service).toBeTruthy();
    }));
});
