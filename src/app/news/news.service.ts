import { Injectable } from '@angular/core';
import { HttpClient, ConfigService } from '../shared';

@Injectable()
export class NewsService {

    public articles:any = [];
    private endpoint: string = '';
    private articleEndpoint: string = '';
    private busy:boolean = false;
    public pagination:any = {};
    public article:any = {};

    constructor(private http: HttpClient,public config: ConfigService) {
        this.endpoint = config.baseUrl + '/articles';
        this.articleEndpoint = config.baseUrl + '/article/';
    }

    getArticles(page?:number) {
        page = page || 1;

        if(this.busy) {
            return;
        }

        this.busy = true;

        this.http.get(this.endpoint + '/'+page)
        .subscribe(
            response => {
                this.articles = this.articles.concat(response.results),
                this.pagination = response.pagination
            },
            err => console.log(err),
            () => this.busy = false
        );
    }

    getArticle(id:number) {
        this.article = {};

        this.http.get(this.articleEndpoint+id)
        .subscribe(
            response => { this.article = response },
            err => console.log(err)
        );
    }

}
