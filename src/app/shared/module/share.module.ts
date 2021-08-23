import { CommonModule } from '@angular/common';
import { NgModule, } from '@angular/core';
import { RouterModule ,} from '@angular/router';
import { FooterComponent } from '../components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomDirective } from '../directive/custom.directive';
import { TempConverterPipe } from '../pipes/temp-converter.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { GteValidatorDirective } from './../directive/gte-validator.directive';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [FooterComponent,CustomDirective,TempConverterPipe,GteValidatorDirective],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    FooterComponent,
    CustomDirective,
    TempConverterPipe,
    GteValidatorDirective,
    HttpClientModule
  ]
})
export class ShareModule { }
