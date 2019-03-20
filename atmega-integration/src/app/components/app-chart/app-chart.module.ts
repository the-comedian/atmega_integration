import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppChartComponent } from './app-chart/app-chart.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    ChartsModule
  ],
  declarations: [AppChartComponent],
  exports: [AppChartComponent]
})
export class AppChartModule {
}
