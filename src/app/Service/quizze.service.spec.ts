import { TestBed } from '@angular/core/testing';

import { QuizzeService } from './quizze.service';

describe('QuizzeService', () => {
  let service: QuizzeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizzeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
