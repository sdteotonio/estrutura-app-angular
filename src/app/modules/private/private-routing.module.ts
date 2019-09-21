import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateAreaComponent } from './components/private-area/private-area.component';

const routes: Routes = [
  {
    path: 'private',
    component: PrivateAreaComponent,
    children: [
      {
        path: 'user',
        loadChildren: './modules/fm-user/fm-user.module#FmUserModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
