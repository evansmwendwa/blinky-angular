import { Injectable } from '@angular/core';
import { HttpClient, ConfigService } from '../shared';

@Injectable()
export class MusicService {

    private albumsEndpoint:string;
    private tracksEndpoint:string;
    private busy:boolean = false;
    public response: any = {};
    public album: any = {};
    public tracks = [];

    constructor(private http: HttpClient, public config: ConfigService) {
        this.tracksEndpoint = config.baseUrl + '/music/album/';
        this.albumsEndpoint = config.baseUrl + '/music/albums';
    }

    getItems() {
        if(this.busy) {
            return;
        }

        if(this.response.hasOwnProperty('results')) {
            return;
        }

        this.busy = true;

        if(!this.response.hasOwnProperty('resultCount')) {
            this.http.get(this.albumsEndpoint)
            .subscribe(
                response => { this.response = response },
                err => console.log(err),
                () => this.busy = false
            );
        }
    }

    getAlbum(id:number) {
        this.album = {};

        this.http.get(this.tracksEndpoint+id)
        .subscribe(
            response => {
                this.album = response.results[0],
                this.tracks = response.results,
                this.tracks.splice(0,1)
            },
            err => console.log(err)
        );
    }

    formatFilename(url:string) {
        return url.slice(0,url.length-13) + '700x700-80.jpg ';
    }

}
