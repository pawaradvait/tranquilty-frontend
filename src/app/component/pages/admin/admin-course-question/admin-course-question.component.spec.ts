import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCourseQuestionComponent } from './admin-course-question.component';

describe('AdminCourseQuestionComponent', () => {
  let component: AdminCourseQuestionComponent;
  let fixture: ComponentFixture<AdminCourseQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCourseQuestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCourseQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
