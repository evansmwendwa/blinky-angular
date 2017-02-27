/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PhotosService } from './photos.service';
import { AppTestingModule } from '../test.module';

describe('PhotosService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                AppTestingModule
            ]
        });
    });

    it('should ...', inject([PhotosService], (service: PhotosService) => {
        expect(service).toBeTruthy();
    }));
});
