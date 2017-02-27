/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MusicService } from './music.service';
import { AppTestingModule } from '../test.module';

describe('MusicService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                AppTestingModule
            ]
        });
    });

    it('should ...', inject([MusicService], (service: MusicService) => {
        expect(service).toBeTruthy();
    }));
});
