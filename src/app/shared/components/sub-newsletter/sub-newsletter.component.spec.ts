import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubNewsletterComponent } from './sub-newsletter.component';

describe('SubNewsletterComponent', () => {
  let component: SubNewsletterComponent;
  let fixture: ComponentFixture<SubNewsletterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubNewsletterComponent]
    });
    fixture = TestBed.createComponent(SubNewsletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
