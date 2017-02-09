import { Component, OnInit } from '@angular/core';
import { MusicService } from './music.service';

@Component({
    selector: 'app-music',
    templateUrl: './music.component.html',
    styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit {

    constructor(public musicService:MusicService) { }

    ngOnInit() {
        this.musicService.getItems();
    }

}
