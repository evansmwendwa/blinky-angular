import { ModuleWithProviders, NgModule  }   from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MusicComponent } from './music/music.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'music', component: MusicComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
