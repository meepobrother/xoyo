import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { prefix } from '../core';
@Component({
  selector: 'xoyo-flexbox',
  templateUrl: './flexbox.component.html',
  styleUrls: ['./flexbox.component.scss']
})
export class FlexboxComponent implements OnInit {

  @Input()
  vertical: boolean = false;

  @HostBinding(`class.${prefix}-flexbox`)
  get flexboxClass() {
    return true;
  }

  @Input()
  @HostBinding(`class.${prefix}-flexbox-vertical`)
  get verticalClass() {
    return !!this.vertical;
  }

  constructor() { }

  ngOnInit() {
  }

}
