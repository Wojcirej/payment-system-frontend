import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) { }

  public get(path) {
    var endpoint = environment.API_URL + path;
    return this.http.get(endpoint);
  }
}
