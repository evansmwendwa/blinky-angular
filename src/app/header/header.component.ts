import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'site-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    public menuActive = false;

    constructor() { }

    ngOnInit() {
    }

    toggleMenu() {
        this.menuActive = !this.menuActive;
    }

}
