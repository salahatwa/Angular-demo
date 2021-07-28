import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginModule } from './../../pages/login/login.module';
import { LandingModule } from './../../pages/landing/landing.module';
import { FooterComponent } from '../components/footer/footer.component';

@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    FooterComponent
  ]
})
export class ShareModule { }
