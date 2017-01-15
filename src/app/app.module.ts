import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// import app modules
import { AppRoutingModule } from './app.routing';

// import components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

// import services

// import pipes

// import directives

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        HomeComponent
    ],
    providers: [

    ],
    exports: [
        AppRoutingModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
