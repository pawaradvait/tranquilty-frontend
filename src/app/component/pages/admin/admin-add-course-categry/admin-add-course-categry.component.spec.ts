import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddCourseCategryComponent } from './admin-add-course-categry.component';

describe('AdminAddCourseCategryComponent', () => {
  let component: AdminAddCourseCategryComponent;
  let fixture: ComponentFixture<AdminAddCourseCategryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddCourseCategryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAddCourseCategryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
