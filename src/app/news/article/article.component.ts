import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'news-article',
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.scss']
})
export class ArticleComponent {

    constructor(public newsService:NewsService, private route: ActivatedRoute) {
        this.route.params.subscribe(params => { this.fetchItem(params) });

        if(this.newsService.articles.length <1) {
            this.newsService.getArticles();
        }
    }

    fetchItem(params:any) {
        this.newsService.getArticle(params.id);
    }

}
