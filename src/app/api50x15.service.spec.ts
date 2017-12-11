import { TestBed, inject } from '@angular/core/testing';

import { Api50x15Service } from './api50x15.service';

describe('Api50x15Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Api50x15Service]
    });
  });

  it('should be created', inject([Api50x15Service], (service: Api50x15Service) => {
    expect(service).toBeTruthy();
  }));
});
