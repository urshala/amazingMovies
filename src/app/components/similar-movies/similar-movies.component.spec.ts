import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilarMoviesComponent } from './similar-movies.component';

describe('SimilarMoviesComponent', () => {
  let component: SimilarMoviesComponent;
  let fixture: ComponentFixture<SimilarMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimilarMoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimilarMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
