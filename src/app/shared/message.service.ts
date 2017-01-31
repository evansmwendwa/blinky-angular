import { Injectable } from '@angular/core';
import { Router, NavigationStart, Event } from '@angular/router'
import 'rxjs/add/operator/filter';

@Injectable()
export class MessageService {

    private message: string;
    private type: string;
    private label: string;
    public loginAlert: string;

    constructor(private router:Router) {
        this.loginAlert = '';
        router.events.filter(
            event => event instanceof NavigationStart)
            .subscribe((event:Event) => { this.routeHandler(); }
        );
    }

    private routeHandler() {
        this.clear();
    }

    setMessage(message:string, label?:string, type?:string): void {
        this.type = type || 'warning';
        this.label = label || '';
        this.message = message;
    }

    getLabel(): string {
        return this.label;
    }

    getType(): string {
        return this.type;
    }

    getMessage(): string {
        // to be called on login redirects
        if(this.loginAlert) {
            return this.loginAlert;
        }
        return this.message;
    }

    clear(): void {
        this.message = '';
    }
}
