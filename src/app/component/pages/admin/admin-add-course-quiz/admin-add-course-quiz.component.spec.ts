import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddCourseQuizComponent } from './admin-add-course-quiz.component';

describe('AdminAddCourseQuizComponent', () => {
  let component: AdminAddCourseQuizComponent;
  let fixture: ComponentFixture<AdminAddCourseQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddCourseQuizComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAddCourseQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
