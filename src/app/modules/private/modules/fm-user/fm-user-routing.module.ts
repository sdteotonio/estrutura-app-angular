import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { SearchUserComponent } from './components/search-user/search-user.component';

const routes: Routes = [
  {
    path: '',
    component: SearchUserComponent
  },
  {
    path: 'register',
    component: RegisterUserComponent
  },
  {
    path: 'register/:id',
    component: RegisterUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FmUserRoutingModule { }
