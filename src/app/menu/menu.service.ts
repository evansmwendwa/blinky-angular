import { Injectable } from '@angular/core';

@Injectable()
export class MenuService {

    public menuExpanded = false;

    constructor() { }

    toggleMenu() {
        this.menuExpanded = !this.menuExpanded;
    }

}
