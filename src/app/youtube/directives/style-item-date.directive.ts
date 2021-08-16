import {
  Directive, ElementRef, Input, OnInit, Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appStyleItemDate]',
})
export class StyleItemDateDirective implements OnInit {
  @Input('appStyleItemDate') public publishDate = '';

  constructor(private elRef: ElementRef, private render: Renderer2) {
  }

  ngOnInit() {
    this.render.setStyle(this.elRef.nativeElement, 'border-bottom', this.addColour(this.publishDate));
  }

  addColour(publishDate: string):string {
    const itemPublishDate = new Date(publishDate);
    const currentDate = new Date();
    const difDate = Math.round((currentDate.getTime() - itemPublishDate.getTime()) / (1000 * 3600 * 24));
    if (difDate <= 7) {
      return 'solid blue 5px';
    } else if (difDate <= 30) {
      return 'solid green 5px';
    } else if (difDate >= 180) {
      return 'solid red 5px';
    }
    return '';
  }
}
