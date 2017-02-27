/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppTestingModule } from '../test.module';
import { RadioComponent } from './radio.component';

describe('RadioComponent', () => {
    let component: RadioComponent;
    let fixture: ComponentFixture<RadioComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                AppTestingModule,
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RadioComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
