import { Component, OnInit, Input, HostBinding, ContentChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'xoyo-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() bg: string = `https://xoyo.xoyocdn.com/mobile/img/img-signin.ea2f1b06.png`;

  @HostBinding('style.background-image')
  get backgroundImage() {
    return `url(${this.bg})`;
  }
  constructor() { }

  ngOnInit() {
  }

}
