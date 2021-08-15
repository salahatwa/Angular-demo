import { NgModule } from '@angular/core';
import { ShareModule } from './../../shared/module/share.module';
import { RegisterComponent } from './register.component';


@NgModule({
  declarations: [RegisterComponent],
  imports: [
    ShareModule
  ]
})
export class RegisterModule { }
