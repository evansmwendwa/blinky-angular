import { Injectable } from '@angular/core';
import { HttpClient, ConfigService } from '../shared';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable()
export class VideoService {

    private endpoint: string = '';
    private busy:boolean = false;
    public videos:any = [];
    public video:any = {};

    constructor(
        private http: HttpClient,
        public config: ConfigService,
        private sanitizer: DomSanitizer
    ) {
        this.endpoint = config.baseUrl + '/videos';
    }

    getVideos() {
        if(this.busy) {
            return;
        }

        this.busy = true;

        this.http.get(this.endpoint)
        .subscribe(
            response => { this.videos = response },
            err => console.log(err),
            () => this.busy = false
        );
    }

    getVideo(id:number) {
        this.video = {};

        this.http.get(this.endpoint + '/' + id)
        .subscribe(
            response => {
                response.data.embed_url = this.sanitizedEmbed(response.data.url),
                this.video = response,
                console.log(this.video)
            },
            err => console.log(err)
        );
    }

    sanitizedEmbed(url:string) {
        let youtube_code = this.parse_utube_url(url);
        let embedUrl = 'https://www.youtube.com/embed/' + youtube_code + '?modestbranding=1&autoplay=1&showinfo=0';
        //return embedUrl;
        return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
    }

    parse_utube_url(url:string){
        var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
        var match = url.match(regExp);
        return (match&&match[7].length==11)? match[7] : false;
    }

}
