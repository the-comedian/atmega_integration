import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})


export class RestService {
  constructor(private httpClient: HttpClient) {
  }

  REST_PATH = 'http://192.168.3.125:10001/';

  public doGet(methodName: string) {
    const url = this.REST_PATH + methodName;
    return this.httpClient.get(url);
    // .map((res: any) => {
    //   this.mapMethod(url, res);
    //   return res;
    // });
  }

  public doPost(methodName: string, params: any) {
    const url = this.REST_PATH + methodName;
    return this.httpClient.post(url, params);
    // .map((res: any) => {
    //   this.mapMethod(url, res);
    //   return res;
    // });
  }

  private mapMethod(url: string, data: any) {
    console.log(url + ' call result: ', data);
  }

}
