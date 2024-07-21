import { TestBed } from '@angular/core/testing';

import { CourseQuestionService } from './course-question.service';

describe('CourseQuestionService', () => {
  let service: CourseQuestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseQuestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
