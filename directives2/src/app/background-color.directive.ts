import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import e from 'express';

@Directive({
  selector: '[appBackgroundColor]'
})
export class BackgroundColorDirective {
@Input('appBackgroundColor') bg!:string;
  constructor(private element:ElementRef, private renderer:Renderer2) { }

  ngOnInit(){
    this.extend();
  }
  extend(){
    const element = this.element.nativeElement;
    this.renderer.setStyle(element,'background',this.bg)  
  }
}
