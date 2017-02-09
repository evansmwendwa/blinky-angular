import { Component, OnInit } from '@angular/core';
import { MusicService } from '../music.service';
import { AudioPlayer } from '../audio-player.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'music-album',
    templateUrl: './album.component.html',
    styleUrls: ['./album.component.scss']
})
export class AlbumComponent {

    constructor(
        public musicService:MusicService,
        private route: ActivatedRoute,
        public audioPlayer:AudioPlayer
    ) {
        this.route.params.subscribe(params => { this.fetchItem(params) });
    }

    fetchItem(params:any) {
        this.musicService.getAlbum(params.id);
    }

}
