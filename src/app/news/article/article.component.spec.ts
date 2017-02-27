/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ArticleComponent } from './article.component';
import { AppTestingModule } from '../../test.module';

describe('ArticleComponent', () => {
    let component: ArticleComponent;
    let fixture: ComponentFixture<ArticleComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                AppTestingModule
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ArticleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
