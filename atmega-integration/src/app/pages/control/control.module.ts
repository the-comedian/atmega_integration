import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ControlRoutingModule } from './control-routing.module';
import { ControlComponent } from './control/control.component';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material';
import { AppChartModule } from '../../components/app-chart/app-chart.module';
import { RestService } from '../../services/rest.service';
import { IntegrationService } from '../../services/integration.service';
import { InputFieldModule } from '../../components/input-field/input-field/input-field.module';

@NgModule({
  imports: [
    CommonModule,
    ControlRoutingModule,
    FormsModule,
    MatSlideToggleModule,
    AppChartModule,
    InputFieldModule
  ],
  declarations: [ControlComponent],
  providers: [RestService, IntegrationService]
})
export class ControlModule {
}
