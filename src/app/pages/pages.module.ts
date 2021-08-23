import { NgModule } from '@angular/core';
import { LandingModule } from './landing/landing.module';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { GithubModule } from './github/github.module';




@NgModule({
  declarations: [],
  imports: [
    LoginModule,
    LandingModule,
    RegisterModule,
    GithubModule
  ]
})
export class PagesModule { }
