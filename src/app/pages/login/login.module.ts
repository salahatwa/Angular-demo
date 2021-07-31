import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ShareModule } from './../../shared/module/share.module';



@NgModule({
  declarations: [LoginComponent, ResetPasswordComponent],
  imports: [
    ShareModule
  ],
  
})
export class LoginModule { }
