import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormUserComponent } from './components/form-user/form-user.component';
import { InfoUserComponent } from './components/info-user/info-user.component';

@NgModule({
  declarations: [FormUserComponent, InfoUserComponent],
  imports: [
    CommonModule
  ],
  exports: [FormUserComponent, InfoUserComponent]
})
export class TemplateUserModule { }
