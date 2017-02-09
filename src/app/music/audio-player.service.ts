import { Injectable } from '@angular/core';

@Injectable()
export class AudioPlayer {

    public player:any;
    public src:string = '';
    public playing:boolean = false;

    constructor() {
        this.player = new Audio();
        let self = this;
        this.player.onpause = function() {
            self.player.src = '';
            self.src = '';
            self.playing = false;
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
