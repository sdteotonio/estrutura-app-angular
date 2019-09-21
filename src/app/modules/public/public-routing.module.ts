import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicAreaComponent } from './components/public-area/public-area.component';

const routes: Routes = [
  {
    path: 'public',
    component: PublicAreaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
