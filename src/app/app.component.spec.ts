/* tslint:disable:no-unused-variable */
import {} from 'jasmine';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Location, CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { MenuService } from './menu/menu.service';
import { PlayerComponent } from './music/player/player.component';
import { AnimationComponent } from './animation/animation.component';

describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                CommonModule,
                RouterTestingModule.withRoutes([
                    {path: '', component: HomeComponent}
                ])
            ],
            declarations: [
                AppComponent,
                HomeComponent,
                HeaderComponent,
                MenuComponent,
                PlayerComponent,
                AnimationComponent
            ],
            providers: [
                MenuService
            ]
        });
    });

    it('should create the app', async(() => {
        fixture = TestBed.createComponent(AppComponent);
        let app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

    it('should create the component', async(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        expect(component).toBeTruthy();
    }));

});
