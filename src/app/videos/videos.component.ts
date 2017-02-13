import { Component, OnInit } from '@angular/core';
import { VideoService } from './video.service';

@Component({
    selector: 'app-videos',
    templateUrl: './videos.component.html',
    styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {

    constructor(public videoService:VideoService) {
        videoService.getVideos();
    }

    ngOnInit() {
    }

}
