import { Injectable } from '@angular/core';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class IntegrationService {

  constructor(private restService: RestService) {
  }

  /**
   * Получение данных для графика
   */
  public getGraphicData() {
    return this.restService.doGet('status/');
  }

}
