/* tslint:disable:no-unused-variable */
import {} from 'jasmine';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppTestingModule } from './test.module';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                AppTestingModule
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
