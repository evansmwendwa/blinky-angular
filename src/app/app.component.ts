import { Component } from '@angular/core';
import { MenuService } from './menu/menu.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'Blinky Bill Music';

    constructor(public menuService: MenuService) { }
}
