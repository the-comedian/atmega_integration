import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartPoint } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import { IntegrationService } from '../../../services/integration.service';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {

  /**
   * Текущая температура
   */
  protected currentTemperature: number;
  /**
   * Целевая температура
   */
  protected targetTemperature: number;
  /**
   * пид ПК
   */
  protected pidPk;
  /**
   * пид ИК
   */
  protected pidIk;
  /**
   * пид ДК
   */
  protected pidDk;
  /**
   * Данные для графика
   */
  protected chartData: ChartDataSets[];
  protected labels: any[];

  constructor(private integrationService: IntegrationService) {
  }

  ngOnInit() {

  }

  /**
   * Получить данные графика
   */
  protected getGraphicData() {
    this.integrationService.getGraphicData()
      .subscribe((res: any) => {
        if (res) {
          console.log(res);
          const newChartItem: ChartDataSets = {};
          const data = [];
          const labels = [];
          res.forEach((item: any) => {
            const chartPoint: ChartPoint = {};
            chartPoint.y = item.current_temp;
            chartPoint.x = item.time;
            labels.push(item.time);
            data.push(chartPoint);
          });
          newChartItem.data = data;
          newChartItem.label = 'Температура';
          this.chartData = [newChartItem];
          this.labels = labels;
        }
      });
  }

  /**
   * Задать целевую температуру
   */
  protected applyTemperature() {
    this.integrationService.setTemp(this.targetTemperature)
      .subscribe((res: any) => {
        if (res) {
          if (res.status == 'ok') {
            console.log('success');
          } else {
            alert('Ошибка при задании температуры');
          }
        }
      });
  }

  /**
   * Задать пид пк
   */
  protected setPidPk() {
    this.integrationService.setPidPk(this.pidPk)
      .subscribe((res: any) => {
        if (res) {
          if (res.status == 'ok') {
            console.log('success');
          } else {
            alert('Ошибка при задании pidPk');
          }
        }
      });
  }

  /**
   * Задать пид дк
   */
  protected setPidDk() {
    this.integrationService.setPidDk(this.pidDk)
      .subscribe((res: any) => {
        if (res) {
          if (res.status == 'ok') {
            console.log('success');
          } else {
            alert('Ошибка при задании pidDk');
          }
        }
      });
  }

  /**
   * Задать пид ик
   */
  protected setPidIk() {
    this.integrationService.setPidIk(this.pidIk)
      .subscribe((res: any) => {
        if (res) {
          if (res.status == 'ok') {
            console.log('success');
          } else {
            alert('Ошибка при задании pidIk');
          }
        }
      });
  }
}
