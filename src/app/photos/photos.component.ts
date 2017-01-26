import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-photos',
    templateUrl: './photos.component.html',
    styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

    public images = [];

    constructor() { }

    ngOnInit() {
        let i:number;
        for(i=1;i<=20;i++) {
            this.images.push('/assets/images/masonry/'+i+'.jpg');
        }
    }

}
