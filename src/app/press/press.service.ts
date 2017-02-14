import { Injectable } from '@angular/core';
import { HttpClient, ConfigService } from '../shared';

@Injectable()
export class PressService {

    public links:any = [];
    private endpoint: string = '';
    private busy:boolean = false;

    constructor(private http: HttpClient,public config: ConfigService) {
        this.endpoint = config.baseUrl + '/press';
    }

    getLinks() {
        if(this.busy) {
            return;
        }

        this.busy = true;

        this.http.get(this.endpoint)
        .subscribe(
            response => { this.links = response },
            err => console.log(err),
            () => this.busy = false
        );
    }

}
