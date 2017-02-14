import { Component, OnInit } from '@angular/core';
import { NewsService } from './news.service';

@Component({
    selector: 'app-news',
    templateUrl: './news.component.html',
    styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

    public news: any = [];

    constructor(public newsService:NewsService) {
        if(this.newsService.articles.length < 1) {
            this.newsService.getArticles();
        }
    }

    nextPage() {
        if(this.newsService.pagination.hasOwnProperty('next_page')) {
            let nextPage = this.newsService.pagination.next_page;

            if(nextPage > 0) {
                this.newsService.getArticles(nextPage);
            }
        }
    }

    ngOnInit() {
        let i:number;
        for(i=0; i<3; i++) {
            this.news.push({
                id:1,
                title:'Art attracts us only by what it reveals of our most secret self',
                image: '/assets/images/news.jpg'
            });

            this.news.push({
                id:1,
                title:'we cut keys while you wait',
                image: '/assets/images/music/im-feeling-it.jpg'
            });

            this.news.push({
                id:1,
                title:'How it all went down at the Blinky bill & the keycutters show at the alchemist.',
                image: '/assets/images/music/we-cut-keys-2.jpg'
            });
        }

    }

}
