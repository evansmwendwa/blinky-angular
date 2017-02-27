/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VideoService } from './video.service';
import { AppTestingModule } from '../test.module';

describe('VideoService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                AppTestingModule
            ]
        });
    });

    it('should ...', inject([VideoService], (service: VideoService) => {
        expect(service).toBeTruthy();
    }));
});
