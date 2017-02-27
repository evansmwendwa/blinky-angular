import { Injectable } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, Event } from '@angular/router';
import 'rxjs/add/operator/filter';

@Injectable()
export class MenuService {

    public menuExpanded = false;
    public hoveredMenu = '';
    public animationState = '';

    constructor(private router: Router) {
        router.events.filter(
            event => event instanceof NavigationStart)
            .subscribe((event: Event) => {
                this.menuExpanded = false,
                document.body.scrollTop = 0,
                this.animationState = ''
            }
        );
    }

    toggleMenu() {
        this.menuExpanded = !this.menuExpanded;
    }

    highlightPage(page: string) {
        this.hoveredMenu = page;
    }

}
