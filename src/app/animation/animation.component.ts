import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-animation',
    templateUrl: './animation.component.html',
    styleUrls: ['./animation.component.scss']
})
export class AnimationComponent implements OnInit {

    @Input() page='home';

    constructor() {
        console.log(this.page);
    }

    ngOnInit() {
        console.log(this.page);
    }

}
