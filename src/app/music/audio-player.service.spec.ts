/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AudioPlayer } from './audio-player.service';

describe('AudioPlayerService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AudioPlayer]
        });
    });

    it('should ...', inject([AudioPlayer], (service: AudioPlayer) => {
        expect(service).toBeTruthy();
    }));
});
