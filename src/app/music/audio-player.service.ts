import { Injectable } from '@angular/core';
import { ConfigService } from '../shared';
import { TracksService } from './tracks.service';


@Injectable()
export class AudioPlayer {

    public player:any;
    public src:string = '';
    public playing:boolean = false;
    public playListIndex = -1;

    constructor(
        public config: ConfigService,
        public tracksService: TracksService
    ) {
        this.player = new Audio();
        let self = this;

        this.player.onpause = function() {
            self.playing = false;
        }

        this.player.onended = function() {
            self.playNext();
        }
    }

    playNext() {
        let count = this.tracksService.tracks.length;
        if(count < 1) {
            return;
        }

        let next = this.playListIndex + 1;

        if(next >= count) {
            next = 0;
        }

        this.playTrack(next);
    }

    playTrack(index:number) {
        let track = this.tracksService.tracks[index];

        if(typeof track !== 'undefined') {
            this.playing = true;
            if(index === this.playListIndex) {
                this.player.play();
                return;
            }

            this.play(track.stream_url + '?client_id=' + this.config.soundCloudClient);
            this.playListIndex = index;
        }

    }

    play(file?:string) {
        this.pause();
        if(file && this.player.src !== file) {
            this.player.src = file;
        }
        if(this.player.src) {
            this.src = this.player.src;
            this.playing = true;
            this.player.play();
        }
    }

    pause() {
        if(!this.player.paused) {
            this.player.pause();
        }
    }

}
