/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RadioPlayerComponent } from './radio-player.component';

describe('RadioPlayerComponent', () => {
    let component: RadioPlayerComponent;
    let fixture: ComponentFixture<RadioPlayerComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [RadioPlayerComponent]
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
