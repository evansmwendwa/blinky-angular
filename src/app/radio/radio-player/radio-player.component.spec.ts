/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppTestingModule } from '../../test.module';
import { RadioPlayerComponent } from './radio-player.component';

describe('RadioPlayerComponent', () => {
    let component: RadioPlayerComponent;
    let fixture: ComponentFixture<RadioPlayerComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                AppTestingModule
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {

        fixture = TestBed.createComponent(RadioPlayerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
