import { ModuleWithProviders, NgModule  }   from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MusicComponent } from './music/music.component';
import { AlbumComponent } from './music/album/album.component';
import { RadioComponent } from './radio/radio.component';
import { RadioPlayerComponent } from './radio/radio-player/radio-player.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'music/:id', component: AlbumComponent },
    { path: 'music', component: MusicComponent },
    { path: 'radio', component: RadioComponent },
    { path: 'radio/:id', component: RadioPlayerComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
