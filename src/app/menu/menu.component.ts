import { Component, OnInit } from '@angular/core';
import { MenuService } from './menu.service';

@Component({
    selector: 'site-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

    public links = [
        {
            link: '/music',
            text: 'Music',
            key: 'music'
        },
        {
            link: '/videos',
            text: 'Videos',
            key: 'videos'
        },
        {
            link: '/radio',
            text: 'Radio',
            key: 'radio-station'
        },
        {
            link: '/news',
            text: 'News',
            key: 'news'
        },
        {
            link: '/bio',
            text: 'Bio',
            key: 'bio'
        },
        {
            link: '/press',
            text: 'Press',
            key: 'press'
        },
        {
            link: '/photos',
            text: 'Photos',
            key: 'photos'
        },
        {
            link: '/hello',
            text: 'Hello!',
            key: 'hello'
        }
    ];

    constructor(public menuService: MenuService) { }

    ngOnInit() {
    }

    mouseEnter(event: any) {
        let target = event.currentTarget;

        if(!target.classList.contains('hovered')) {
            target.classList.add('hovered');
        }

        this.menuService.animationState = 'playing';
    }

    mouseLeave(event: any) {
        let target = event.currentTarget;

        if(target.classList.contains('hovered')) {
            target.classList.remove('hovered');
        }
    }

}
