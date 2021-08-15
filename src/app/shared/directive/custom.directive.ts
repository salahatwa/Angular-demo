import { Directive, ElementRef, Input, OnInit, COMPILER_OPTIONS, OnChanges } from '@angular/core';

@Directive({
  selector: '[ngColor]'
})
export class CustomDirective implements OnInit, OnChanges {

  color: string;

  @Input()
  set ngColor(value) {
    console.log(value);
    this.color = value;
  }

  ngOnChanges(): void {
    console.log(this.color);
    this.changeColor();
  }

  changeColor() {
    this.elementRef.nativeElement.classList.add(this.color);
  }
  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    // this.color.forEach(color => {
    // this.elementRef.nativeElement.classList.add(this.color);
    // });
  }
}
