import { Component, OnInit } from '@angular/core';
import { RadioService } from '../radio.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'app-radio-player',
    templateUrl: './radio-player.component.html',
    styleUrls: ['./radio-player.component.scss']
})
export class RadioPlayerComponent {

    constructor(public radioService: RadioService, private route: ActivatedRoute) {
        this.route.params.subscribe(params => { this.fetchItem(params) });
    }

    fetchItem(params:any) {
        this.radioService.getEpisode(params.id);
    }

}
