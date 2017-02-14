import { Component, OnInit } from '@angular/core';
import { PressService } from './press.service';

@Component({
    selector: 'app-press',
    templateUrl: './press.component.html',
    styleUrls: ['./press.component.scss']
})
export class PressComponent {

    constructor(public pressService: PressService) {
        pressService.getLinks();
    }

    extractDomain(url) {
        let domain:string;
        //find & remove protocol (http, ftp, etc.) and get domain
        if (url.indexOf("://") > -1) {
            domain = url.split('/')[2];
        }
        else {
            domain = url.split('/')[0];
        }

        //find & remove port number
        domain = domain.split(':')[0];

        return domain;
    }

}
