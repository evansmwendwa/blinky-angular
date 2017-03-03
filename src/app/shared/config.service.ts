import { Injectable, isDevMode } from '@angular/core';

@Injectable()
export class ConfigService {
    public baseUrl = 'http://backend.blinkybillmusic.com/api';
    public soundCloudApi = 'https://api.soundcloud.com/users/4496565/tracks';
    public soundCloudClient = 'c7p0XZnTQsLUH5pwVTuhZPlZPvpCKHVE';

    constructor() {
        if(isDevMode()) {
            this.baseUrl = 'http://api.blink.dev/api';
        }
    }
}
