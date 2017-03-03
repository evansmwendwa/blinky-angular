import { Component, OnInit } from '@angular/core';
import { TracksService } from '../tracks.service';
import { AudioPlayer } from '../audio-player.service';
import { ConfigService } from '../../shared';

@Component({
    selector: 'app-tracks',
    templateUrl: './tracks.component.html',
    styleUrls: ['./tracks.component.scss']
})
export class TracksComponent implements OnInit {

    constructor(
        public tracksService:TracksService,
        public audioPlayer:AudioPlayer,
        public config: ConfigService
    ) { }

    ngOnInit() {
        this.tracksService.getTracks();
    }

}
