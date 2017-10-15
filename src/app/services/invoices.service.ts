import { Injectable } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable()
export class InvoicesService {

  private _invoicesUrl = '/api/invoices'
  private invoiceFormAction = new BehaviorSubject<any>(null);


  constructor(private _api: ApiService) { }

  public getInvoicesList() {
    return this._api.get(this._invoicesUrl);
  }

  public getInvoiceById(id) {
    return this._api.get(`${this._invoicesUrl}/${id}`);
  }

  public createNewInvoice(data) {
    return this._api.post(this._invoicesUrl, data);
  }

  public updateInvoice(data, id) {
    return this._api.put(`${this._invoicesUrl}/${id}`, data);
  }

  public getInvoiceFormAction() {
    return this.invoiceFormAction.asObservable();
  }

  public getInvoiceItems(id) {
    return this._api.get(`${this._invoicesUrl}/${id}/items`);
  }

  public addInvoiceItem(id, data) {
    return this._api.post(`${this._invoicesUrl}/${id}/items`, data);
  }

  public setInvoiceFormAction(data) {
    this.invoiceFormAction.next(data);
  }

  public updateInvoiceItem(invoiceId, itemId, data) {
    return this._api.put(`${this._invoicesUrl}/${invoiceId}/items/${itemId}`, data);
  }

}
