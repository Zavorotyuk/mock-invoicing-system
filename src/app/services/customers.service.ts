import { Injectable } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Injectable()
export class CustomersService {

  private _customersUrl = '/api/customers'

  constructor(private _api: ApiService) { }


}
