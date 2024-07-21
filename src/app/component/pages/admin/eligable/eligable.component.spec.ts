import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EligableComponent } from './eligable.component';

describe('EligableComponent', () => {
  let component: EligableComponent;
  let fixture: ComponentFixture<EligableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EligableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EligableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
