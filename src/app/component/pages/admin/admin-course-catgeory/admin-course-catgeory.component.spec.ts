import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCourseCatgeoryComponent } from './admin-course-catgeory.component';

describe('AdminCourseCatgeoryComponent', () => {
  let component: AdminCourseCatgeoryComponent;
  let fixture: ComponentFixture<AdminCourseCatgeoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCourseCatgeoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCourseCatgeoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
