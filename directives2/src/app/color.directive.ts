import { Directive, Input, Renderer2 } from '@angular/core';
import { ElementRef } from '@angular/core';
@Directive({
  selector: '[appColor]',
  standalone:true
})
export class ColorDirective {
  @Input('appColor') color!: string; //At first this wouldnt work so i had to add the !. this tells typescript that the value will be initalized. Pretty important to know!
  constructor(private element:ElementRef,private renderer:Renderer2){
    
   }
   ngOnInit() {
    this.extend();  // The input is read after the constructor.
                    // Thats why the extend method is added here
  }

   private extend(){
    const element = this.element.nativeElement;
    this.renderer.setStyle(element,'color',this.color)
   }
}
