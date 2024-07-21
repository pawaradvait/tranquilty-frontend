import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternComponent } from './intern.component';

describe('InternComponent', () => {
  let component: InternComponent;
  let fixture: ComponentFixture<InternComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
