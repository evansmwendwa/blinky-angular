import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'site-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

    public links = [
        {
            theme:'#a11d77',
            link:'/music',
            text: 'Music'
        },
        {
            theme:'#313b72',
            link:'/videos',
            text: 'Videos'
        },
        {
            theme:'#f9f200',
            link:'/radio',
            text: 'Radio'
        },
        {
            theme:'#9ed2ce',
            link:'',
            text: 'News'
        },
        {
            theme:'#00aaec',
            link:'',
            text: 'Gigs'
        },
        {
            theme:'#00a48d',
            link:'',
            text: 'Bio'
        },
        {
            theme:'#c885b1',
            link:'',
            text: 'Press'
        },
        {
            theme:'#e1287a',
            link:'',
            text: 'Photos'
        },
        {
            theme:'#3f147b',
            link:'',
            text: 'Hello!'
        }
    ];

    constructor() { }

    ngOnInit() {
    }

}
