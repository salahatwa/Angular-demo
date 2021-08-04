import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { CustomDirective } from '../directive/custom.directive';


@NgModule({
  declarations: [FooterComponent,CustomDirective],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    FormsModule,
    FooterComponent,
    CustomDirective
  ]
})
export class ShareModule { }
