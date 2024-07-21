import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewQuizComponent } from './user-view-quiz.component';

describe('UserViewQuizComponent', () => {
  let component: UserViewQuizComponent;
  let fixture: ComponentFixture<UserViewQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserViewQuizComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserViewQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
