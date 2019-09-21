import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { PrivateAreaComponent } from './components/private-area/private-area.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [PrivateAreaComponent, DashboardComponent],
  imports: [
    CommonModule,
    PrivateRoutingModule
  ]
})
export class PrivateModule { }
