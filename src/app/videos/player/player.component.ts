import { Component, OnInit } from '@angular/core';
import { VideoService } from '../video.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'app-player',
    templateUrl: './player.component.html',
    styleUrls: ['./player.component.scss']
})
export class VideoPlayerComponent {

    constructor(public videoService: VideoService, private route: ActivatedRoute) {
        this.route.params.subscribe(params => { this.fetchItem(params) });
    }

    fetchItem(params:any) {
        this.videoService.getVideo(params.id);
    }

}
