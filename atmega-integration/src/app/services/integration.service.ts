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

  /**
   * Установка температуры
   * @param temp - температура
   */
  public setTemp(temp: number) {
    const params = {
      value: temp
    };
    return this.restService.doPost('set/temp', params);
  }

  /**
   * Метод для ПК пида
   */
  public setPidPk(value: number) {
    const params = {
      value: value
    };
    return this.restService.doPost('set/pid_pk/', params);
  }

  /**
   * Метод для ИК пида
   */
  public setPidIk(value: number) {
    const params = {
      value: value
    };
    return this.restService.doPost('set/pid_ik/', params);
  }

  /**
   * Метод для ДК пида
   */
  public setPidDk(value: number) {
    const params = {
      value: value
    };
    return this.restService.doPost('set/pid_dk/', params);
  }


}
