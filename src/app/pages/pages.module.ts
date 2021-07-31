import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LandingModule } from './landing/landing.module';
import { LoginModule } from './login/login.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoginModule,
    LandingModule
  ]
})
export class PagesModule { }
