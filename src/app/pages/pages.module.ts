import { NgModule } from '@angular/core';
import { LandingModule } from './landing/landing.module';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';



@NgModule({
  declarations: [],
  imports: [
    LoginModule,
    LandingModule,
    RegisterModule
  ]
})
export class PagesModule { }
