import { TestBed, inject } from '@angular/core/testing';

import { InvoicesService } from './invoices.service';
import { ApiService } from '../shared/api.service';

describe('InvoicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InvoicesService, ApiService]
    });
  });

  it('should be created', inject([InvoicesService, ApiService], (service: InvoicesService) => {
    expect(service).toBeTruthy();
  }));
});
