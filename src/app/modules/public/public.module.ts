import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PublicAreaComponent } from './components/public-area/public-area.component';
import { PublicRoutingModule } from './public-routing.module';


@NgModule({
  declarations: [

    PublicAreaComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
