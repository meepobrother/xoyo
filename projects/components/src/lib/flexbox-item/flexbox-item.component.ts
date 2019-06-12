import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { prefix } from '../core';
@Component({
  selector: 'xoyo-flexbox-item',
  templateUrl: './flexbox-item.component.html',
  styleUrls: ['./flexbox-item.component.scss']
})
export class FlexboxItemComponent implements OnInit {

  @Input()
  center: boolean = false;

  @HostBinding(`class.${prefix}-flexbox-item-center`)
  get itemCenter() {
    return !!this.center;
  }

  constructor() { }

  ngOnInit() { }

}
