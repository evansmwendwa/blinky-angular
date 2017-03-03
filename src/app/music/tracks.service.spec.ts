import { TestBed, inject } from '@angular/core/testing';

import { TracksService } from './tracks.service';
import { AppTestingModule } from '../test.module';

describe('TracksService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [AppTestingModule]
        });
    });

    it('should ...', inject([TracksService], (service: TracksService) => {
        expect(service).toBeTruthy();
    }));
});
