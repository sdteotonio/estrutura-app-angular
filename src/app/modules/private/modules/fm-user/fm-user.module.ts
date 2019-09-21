import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { SearchUserComponent } from './components/search-user/search-user.component';
import { FmUserRoutingModule } from './fm-user-routing.module';
import { TemplateUserModule } from './modules/template-user/template-user.module';
import { FmUserService } from './services/fm-user.service';


@NgModule({
  declarations: [
    SearchUserComponent,
    RegisterUserComponent
  ],
  imports: [
    CommonModule,
    FmUserRoutingModule,
    TemplateUserModule
  ],
  providers: [
    FmUserService
  ]
})
export class FmUserModule { }
