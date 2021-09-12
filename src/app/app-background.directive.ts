import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAppBackground]'
})
export class AppBackgroundDirective {

  @Input() correctAnswer:boolean=false;


  constructor(private eleRef: ElementRef, private renderer : Renderer2) { }

  @HostListener('click') onAnswered(){
    if(this.correctAnswer){
      this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'green');
    }else{
      this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'red');
    }
  }

}
