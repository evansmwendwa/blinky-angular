import { Injectable } from '@angular/core';
import { HttpClient, ConfigService } from '../shared';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable()
export class RadioService {

    private endpoint: string = '';
    private busy:boolean = false;
    public episodes:any = [];
    public episode:any = {};

    constructor(
        private http: HttpClient,
        public config: ConfigService,
        private sanitizer: DomSanitizer
    ) {
        this.endpoint = config.baseUrl + '/rbma';
    }

    getEpisodes() {
        if(this.busy) {
            return;
        }

        this.busy = true;

        this.http.get(this.endpoint)
        .subscribe(
            response => { this.episodes = response },
            err => console.log(err),
            () => this.busy = false
        );
    }

    getEpisode(id:number) {
        this.episode = {};

        this.http.get(this.endpoint + '/' + id)
        .subscribe(
            response => {
                response.embed_url = this.sanitizedEmbed(response.url),
                this.episode = response
            },
            err => console.log(err)
        );
    }

    sanitizedEmbed(url:string) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url+'/embed');
    }

}
