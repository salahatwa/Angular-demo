import { NgModule } from '@angular/core';
import { ShareModule } from './../../shared/module/share.module';
import { GithubComponent } from './github.component';



@NgModule({
  declarations: [GithubComponent],
  imports: [
    ShareModule
  ]
})
export class GithubModule { }
