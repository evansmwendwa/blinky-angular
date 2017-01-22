import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu/menu.service';

@Component({
    selector: 'site-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    constructor(public menuService: MenuService) { }

    ngOnInit() {
    }

}
