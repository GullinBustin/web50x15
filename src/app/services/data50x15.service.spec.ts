import { TestBed, inject } from '@angular/core/testing';

import { Data50x15Service } from './data50x15.service';

describe('Data50x15Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Data50x15Service]
    });
  });

  it('should be created', inject([Data50x15Service], (service: Data50x15Service) => {
    expect(service).toBeTruthy();
  }));
});
