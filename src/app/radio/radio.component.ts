import { Component, OnInit } from '@angular/core';
import { RadioService } from './radio.service';

@Component({
    selector: 'app-radio',
    templateUrl: './radio.component.html',
    styleUrls: ['./radio.component.scss']
})
export class RadioComponent implements OnInit {

    constructor(public radioService:RadioService) {
        this.radioService.getEpisodes();
    }

    ngOnInit() {
    }

}
