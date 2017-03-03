import { Injectable } from '@angular/core';
import { HttpClient, ConfigService } from '../shared';

@Injectable()
export class TracksService {

    public tracks:any = [];
    private busy:boolean = false;
    private tracksEndpoint:string;

    constructor(private http: HttpClient, public config: ConfigService) {
        this.tracksEndpoint = config.soundCloudApi +'?client_id=' + config.soundCloudClient;
    }

    getTracks() {
        if(this.busy) {
            return;
        }

        if(this.tracks.length) {
            return;
        }

        this.busy = true;

        this.http.get(this.tracksEndpoint)
        .subscribe(
            response => {
                this.tracks = response
            },
            err => console.log(err),
            () => this.busy = false
        );
    }

}
