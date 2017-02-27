/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NewsService } from './news.service';
import { AppTestingModule } from '../test.module';

describe('NewsService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                AppTestingModule
            ]
        });
    });

    it('should ...', inject([NewsService], (service: NewsService) => {
        expect(service).toBeTruthy();
    }));
});
