import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';4
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map'


@Injectable()
export class ApiService {

private static readonly HOST = environment.HOST;

  constructor(private http: Http) { }

  getBaseUrl() {
    return ApiService.HOST;
  }

  get(url, params?) {
    let urlParams: URLSearchParams = new URLSearchParams();
    let headers = new Headers();

    if(params) {
      Object.keys(params).map((key) => {
        urlParams.set(key, params[key]);
      })
    }

    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({headers: headers});
    options.search = params;
    return this.http.get(this.getBaseUrl() + url, options)
    .map(res => res.json())
  }

  post(url, data) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers});
    return this.http.post(this.getBaseUrl() + url, data, options)
    .map(res => res.json());
  }

  patch(url, data) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers});
    return this.http.patch(this.getBaseUrl() + url, data, options)
    .map(res => res.json());
  }

  delete(url) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers, body: {}});
    return this.http.delete(this.getBaseUrl() + url, options)
    .map(res => res.json());
  }


}
