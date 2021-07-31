import { NgModule } from '@angular/core';
import { LandingModule } from './landing/landing.module';
import { LoginModule } from './login/login.module';



@NgModule({
  declarations: [],
  imports: [
    LoginModule,
    LandingModule
  ]
})
export class PagesModule { }
