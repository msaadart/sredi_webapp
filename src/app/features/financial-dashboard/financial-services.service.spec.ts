import { TestBed } from '@angular/core/testing';

import { FinancialServicesService } from './financial-services.service';

describe('FinancialServicesService', () => {
  let service: FinancialServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinancialServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
