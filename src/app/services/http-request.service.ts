import { environment as env } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {

  constructor(private http: HttpClient) { }
  //To get products
  getProduct() {
    return this.http.get(env.APIUrlProduct);
  }
  //To get category
  getCategory() {
    return this.http.get(env.APIUrlCategory);
  }
  //To get data to the API digital

}


