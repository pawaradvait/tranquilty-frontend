import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseInstructionComponent } from './course-instruction.component';

describe('CourseInstructionComponent', () => {
  let component: CourseInstructionComponent;
  let fixture: ComponentFixture<CourseInstructionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseInstructionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseInstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
