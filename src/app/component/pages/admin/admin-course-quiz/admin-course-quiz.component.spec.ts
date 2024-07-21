import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCourseQuizComponent } from './admin-course-quiz.component';

describe('AdminCourseQuizComponent', () => {
  let component: AdminCourseQuizComponent;
  let fixture: ComponentFixture<AdminCourseQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCourseQuizComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCourseQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
