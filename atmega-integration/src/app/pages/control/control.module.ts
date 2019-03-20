import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ControlRoutingModule } from './control-routing.module';
import { ControlComponent } from './control/control.component';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material';
import { AppChartModule } from '../../components/app-chart/app-chart.module';

@NgModule({
  imports: [
    CommonModule,
    ControlRoutingModule,
    FormsModule,
    MatSlideToggleModule,
    AppChartModule
  ],
  declarations: [ControlComponent]
})
export class ControlModule { }
