import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {
    public baseUrl = 'http://api.blink.dev';
    constructor() { }
}
