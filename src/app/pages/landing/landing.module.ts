import { NgModule } from '@angular/core';
import { ShareModule } from './../../shared/module/share.module';
import { LandingComponent } from './landing.component';



@NgModule({
  declarations: [LandingComponent],
  imports: [
    ShareModule
  ],
  exports:[
    
  ]
})
export class LandingModule { }
