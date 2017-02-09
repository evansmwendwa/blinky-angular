import { Component, OnInit } from '@angular/core';
import { AudioPlayer } from '../audio-player.service';

@Component({
    selector: 'music-player',
    templateUrl: './player.component.html',
    styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

    constructor(public audioPlayer: AudioPlayer) { }

    ngOnInit() {
    }

}
