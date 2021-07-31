import { NgModule } from '@angular/core';
import { ShareModule } from './../../shared/module/share.module';
import { LoginComponent } from './login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';



@NgModule({
  declarations: [LoginComponent, ResetPasswordComponent],
  imports: [
    ShareModule
  ],
  
})
export class LoginModule { }
