import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class RestService {
  constructor(private httpClient: HttpClient) {
  }

  headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});

  REST_PATH = '/rest/';

  public doGet(methodName: string) {
    const url = this.REST_PATH + methodName;
    return this.httpClient.get(url);
  }

  public doPost(methodName: string, params: any) {
    const url = this.REST_PATH + methodName;
    const options = {
      headers: this.headers,
      body: params,
      withCredentials: true
    };
    return this.httpClient.request('POST', url, options);
  }

  private mapMethod(url: string, data: any) {
    console.log(url + ' call result: ', data);
  }

}
