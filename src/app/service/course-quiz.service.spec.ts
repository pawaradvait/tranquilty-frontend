import { TestBed } from '@angular/core/testing';

import { CourseQuizService } from './course-quiz.service';

describe('CourseQuizService', () => {
  let service: CourseQuizService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseQuizService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
