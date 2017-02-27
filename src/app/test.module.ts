import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { Http, BaseRequestOptions, XHRBackend, ResponseOptions, Response } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { NgModule } from '@angular/core';

// import app modules
import { AppRoutingModule } from './app.routing';
import { MasonryModule } from 'angular2-masonry';

// import services
import { StateService } from './core';
import { MenuService } from './menu/menu.service';
import { MessageService, HttpClient, ConfigService } from './shared';
import { PhotosService } from './photos/photos.service';
import { MusicService, AudioPlayer } from './music';
import { VideoService } from './videos/video.service';
import { RadioService } from './radio/radio.service';
import { PressService } from './press/press.service';
import { NewsService } from './news/news.service';

// import pipes

// import directives

// import components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { MusicComponent } from './music/music.component';
import { AlbumComponent } from './music/album/album.component';
import { RadioComponent } from './radio/radio.component';
import { RadioPlayerComponent } from './radio/radio-player/radio-player.component';
import { VideosComponent } from './videos/videos.component';
import { VideoPlayerComponent } from './videos/player/player.component';
import { NewsComponent } from './news/news.component';
import { ArticleComponent } from './news/article/article.component';
import { PhotosComponent } from './photos/photos.component';
import { HelloComponent } from './hello/hello.component';
import { PressComponent } from './press/press.component';
import { BioComponent } from './bio/bio.component';
import { AnimationComponent } from './animation/animation.component';
import { PlayerComponent } from './music/player/player.component';


@NgModule({
  imports: [
      CommonModule,
      MasonryModule,
      AppRoutingModule,
      RouterTestingModule.withRoutes([
          {path: '', component: HomeComponent}
      ])
  ],
  declarations: [
      AppComponent,
      HomeComponent,
      HeaderComponent,
      MenuComponent,
      MusicComponent,
      AlbumComponent,
      RadioComponent,
      RadioPlayerComponent,
      VideosComponent,
      VideoPlayerComponent,
      NewsComponent,
      ArticleComponent,
      PhotosComponent,
      HelloComponent,
      PressComponent,
      BioComponent,
      AnimationComponent,
      PlayerComponent
  ],
  providers: [
      MessageService,
      HttpClient,
      StateService,
      ConfigService,
      MenuService,
      PhotosService,
      MusicService,
      AudioPlayer,
      VideoService,
      RadioService,
      PressService,
      NewsService,

      MockBackend,
      BaseRequestOptions,
      {
        provide: Http,
        useFactory: (mockBackend: MockBackend, defaultOptions: BaseRequestOptions) => {
          return new Http(mockBackend, defaultOptions);
        },
        deps: [MockBackend, BaseRequestOptions]
      }
  ],
  exports:[
      AppRoutingModule,
      MasonryModule,

      AppComponent,
      HomeComponent,
      HeaderComponent,
      MenuComponent,
      MusicComponent,
      AlbumComponent,
      RadioComponent,
      RadioPlayerComponent,
      VideosComponent,
      VideoPlayerComponent,
      NewsComponent,
      ArticleComponent,
      PhotosComponent,
      HelloComponent,
      PressComponent,
      BioComponent,
      AnimationComponent,
      PlayerComponent
  ]
})
export class AppTestingModule { }
