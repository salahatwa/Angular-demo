import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomDirective } from '../directive/custom.directive';
import { TempConverterPipe } from '../pipes/temp-converter.pipe';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [FooterComponent,CustomDirective,TempConverterPipe],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    FooterComponent,
    CustomDirective,
    TempConverterPipe
  ]
})
export class ShareModule { }
