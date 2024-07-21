import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseSolvedInfoComponent } from './use-solved-info.component';

describe('UseSolvedInfoComponent', () => {
  let component: UseSolvedInfoComponent;
  let fixture: ComponentFixture<UseSolvedInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseSolvedInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UseSolvedInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
