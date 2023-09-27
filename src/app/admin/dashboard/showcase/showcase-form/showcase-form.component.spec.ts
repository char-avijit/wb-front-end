import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcaseFormComponent } from './showcase-form.component';

describe('ShowcaseFormComponent', () => {
  let component: ShowcaseFormComponent;
  let fixture: ComponentFixture<ShowcaseFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowcaseFormComponent]
    });
    fixture = TestBed.createComponent(ShowcaseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
