import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable()
export class SharedService {

  private _customersUrl = '/api/customers';
  private _productsUrl = '/api/products';

  constructor(private _api: ApiService) { }

  public getCustomersList() {
    return this._api.get(this._customersUrl);
  }

  public getProductsList() {
    return this._api.get(this._productsUrl);
  }

  public getProductById(id) {
    return this._api.get(`${this._productsUrl}/${id}`)
  }

}
