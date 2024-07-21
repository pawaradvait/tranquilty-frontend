import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewQuestionComponent } from './user-view-question.component';

describe('UserViewQuestionComponent', () => {
  let component: UserViewQuestionComponent;
  let fixture: ComponentFixture<UserViewQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserViewQuestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserViewQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
