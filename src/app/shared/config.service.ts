import { Injectable, isDevMode } from '@angular/core';

@Injectable()
export class ConfigService {
    public baseUrl = 'http://backend.blinkybillmusic.com/api';

    constructor() {
        if(isDevMode()) {
            this.baseUrl = 'http://api.blink.dev/api';
        }
    }
}
