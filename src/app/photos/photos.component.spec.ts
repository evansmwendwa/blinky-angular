/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PhotosComponent } from './photos.component';
import { AppTestingModule } from '../test.module';

describe('PhotosComponent', () => {
    let component: PhotosComponent;
    let fixture: ComponentFixture<PhotosComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                AppTestingModule
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PhotosComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
