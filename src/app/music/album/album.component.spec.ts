/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AlbumComponent } from './album.component';
import { AppTestingModule } from '../../test.module';

describe('AlbumComponent', () => {
    let component: AlbumComponent;
    let fixture: ComponentFixture<AlbumComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                AppTestingModule
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AlbumComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
