import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'site-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

    public links = [
        {
            link:'/music',
            text: 'Music',
            key: 'music'
        },
        {
            link:'/videos',
            text: 'Videos',
            key: 'videos'
        },
        {
            link:'/radio',
            text: 'Radio',
            key: 'radio'
        },
        {
            link:'/news',
            text: 'News',
            key: 'news'
        },
        {
            link:'/bio',
            text: 'Bio',
            key: 'bio'
        },
        {
            link:'/press',
            text: 'Press',
            key: 'press'
        },
        {
            link:'/photos',
            text: 'Photos',
            key: 'photos'
        },
        {
            link:'/hello',
            text: 'Hello!',
            key: 'hello'
        }
    ];

    constructor() { }

    ngOnInit() {
    }

}
