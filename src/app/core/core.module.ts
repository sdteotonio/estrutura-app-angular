import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { AppServiceService } from './services/app-service.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MainInterceptorService } from './interceptors/main-interceptor.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        AppServiceService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: MainInterceptorService,
          multi: true
        }
      ]
    };
  }
}
