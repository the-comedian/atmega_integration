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
   * Нагреватель
   */
  protected heater: boolean = false;
  /**
   * Вентилятор
   */
  protected fan: boolean = false;
  /**
   * Текущая температура
   */
  protected currentTemperature: number;
  /**
   * Целевая температура
   */
  protected targetTemperature: number;
  /**
   * Данные для графика
   */
  protected chartData: ChartDataSets[];
  protected labels: any[];

  constructor(private integrationService: IntegrationService) {
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

  ngOnInit() {
  }

  protected onHeaterChange() {
    if (this.heater) {
      // включить нагреватель
    } else {
      // выключить нагреватель
    }
  }

  protected onFanChange() {
    if (this.heater) {
      // включить вентилятор
    } else {
      // выключить вентилятор
    }
  }


}
