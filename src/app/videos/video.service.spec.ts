/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VideoService } from './video.service';
import { HttpClient } from '../shared/http-client.service';

describe('VideoService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [VideoService, HttpClient]
        });
    });

    it('should ...', inject([VideoService], (service: VideoService) => {
        expect(service).toBeTruthy();
    }));
});
