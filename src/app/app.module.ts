import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// import app modules
import { AppRoutingModule } from './app.routing';

// import services
import { StateService } from './core';
import { MenuService } from './menu/menu.service';

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

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
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
        VideosComponent
    ],
    providers: [
        StateService,
        MenuService
    ],
    exports: [
        AppRoutingModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
