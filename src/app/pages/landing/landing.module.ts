import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { ShareModule } from 'src/app/shared/module/share.module';



@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    ShareModule
  ]
})
export class LandingModule { }
