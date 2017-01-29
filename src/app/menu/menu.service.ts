import { Injectable } from '@angular/core';
import { Router, NavigationStart, Event } from '@angular/router';
import 'rxjs/add/operator/filter';

@Injectable()
export class MenuService {

    public menuExpanded = false;

    constructor(private router:Router) {
        router.events.filter(
            event => event instanceof NavigationStart)
            .subscribe((event:Event) => { this.menuExpanded = false }
        );
    }

    toggleMenu() {
        this.menuExpanded = !this.menuExpanded;
    }

}
