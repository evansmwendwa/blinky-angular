import { Injectable } from '@angular/core';
import { HttpClient, ConfigService } from '../shared';

@Injectable()
export class PhotosService {

    private endpoint:string;
    private busy:boolean = false;
    public photos: any = [];

    constructor(private http: HttpClient, public config: ConfigService) {
        this.endpoint = config.baseUrl + '/gallery';
    }

    getPhotos() {
        if(!this.busy && this.photos.length === 0) {
            this.http.get(this.endpoint)
            .subscribe(
                data => { this.processRequest(data) },
                err => console.log(err),
                () => this.busy = false
            );
        }
    }

    processRequest(data:any) {
        this.photos = data;
    }

}
