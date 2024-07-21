import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddCourseQuestionComponent } from './admin-add-course-question.component';

describe('AdminAddCourseQuestionComponent', () => {
  let component: AdminAddCourseQuestionComponent;
  let fixture: ComponentFixture<AdminAddCourseQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddCourseQuestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAddCourseQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
