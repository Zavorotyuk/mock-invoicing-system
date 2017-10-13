import { Injectable } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Injectable()
export class InvoicesService {

  private _invoicesUrl = '/api/invoices'

  constructor(private _api: ApiService) { }

  public getInvoicesList() {
    return this._api.get(this._invoicesUrl);
  }

}
