import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternshipResultComponent } from './internship-result.component';

describe('InternshipResultComponent', () => {
  let component: InternshipResultComponent;
  let fixture: ComponentFixture<InternshipResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternshipResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternshipResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
