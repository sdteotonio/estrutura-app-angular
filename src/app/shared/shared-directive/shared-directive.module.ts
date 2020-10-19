import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CpfDirective } from './directives/cpf.directive';

@NgModule({
  declarations: [CpfDirective],
  imports: [
    CommonModule
  ],
  exports: [CpfDirective]
})
export class SharedDirectiveModule { }
