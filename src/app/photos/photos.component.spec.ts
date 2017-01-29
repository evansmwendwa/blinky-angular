/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { MasonryModule } from 'angular2-masonry';

import { PhotosComponent } from './photos.component';

describe('PhotosComponent', () => {
    let component: PhotosComponent;
    let fixture: ComponentFixture<PhotosComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [MasonryModule],
            declarations: [PhotosComponent]
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
