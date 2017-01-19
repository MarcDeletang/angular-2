/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AuthCheckerService } from './auth-checker.service';

describe('AuthCheckerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthCheckerService]
    });
  });

  it('should ...', inject([AuthCheckerService], (service: AuthCheckerService) => {
    expect(service).toBeTruthy();
  }));
});
