import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// import app modules
import { AppRoutingModule } from './app.routing';
import { MasonryModule } from 'angular2-masonry';

// import services
import { StateService } from './core';
import { MenuService } from './menu/menu.service';
import { MessageService, HttpClient, ConfigService } from './shared';
import { PhotosService } from './photos/photos.service';

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

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        MasonryModule,
        AppRoutingModule
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
        AnimationComponent
    ],
    providers: [
        MessageService,
        HttpClient,
        StateService,
        ConfigService,
        MenuService,
        PhotosService
    ],
    exports: [
        AppRoutingModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
