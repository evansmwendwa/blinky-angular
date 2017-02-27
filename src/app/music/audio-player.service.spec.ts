/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AudioPlayer } from './audio-player.service';
import { AppTestingModule } from '../test.module';

describe('AudioPlayerService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                AppTestingModule
            ]
        });
    });

    it('should ...', inject([AudioPlayer], (service: AudioPlayer) => {
        expect(service).toBeTruthy();
    }));
});
