import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';

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

  constructor() {
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
