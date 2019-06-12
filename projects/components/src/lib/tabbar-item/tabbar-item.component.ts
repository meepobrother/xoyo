import { Component, OnInit, HostBinding } from '@angular/core';
import { prefix } from '../core';
@Component({
  selector: 'xoyo-tabbar-item',
  templateUrl: './tabbar-item.component.html',
  styleUrls: ['./tabbar-item.component.scss']
})
export class TabbarItemComponent implements OnInit {

  @HostBinding(`class.${prefix}-tabbar-item`)
  get tabbarItem() {
    return true;
  }
  
  get textCls() {
    return `${prefix}-tabbar-txt`;
  }

  constructor() { }

  ngOnInit() { }

}
