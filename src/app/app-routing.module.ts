import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { LoginComponent } from './pages/login/login.component';
import { ResetPasswordComponent } from './pages/login/reset-password/reset-password.component';
import { RegisterComponent } from './pages/register/register.component';
import { GithubComponent } from './pages/github/github.component';

const routes: Routes = [
  { path: 'landing', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'reset', component: ResetPasswordComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'github', component: GithubComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
