import { Component, OnInit, HostBinding, Input, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { prefix } from '../core';

export interface TabbarItemInfo {
  title: string;
  picture: string;
  link: string;
}

@Component({
  selector: 'xoyo-tabbar-item',
  templateUrl: './tabbar-item.component.html',
  styleUrls: ['./tabbar-item.component.scss']
})
export class TabbarItemComponent implements OnInit {
  @Input() info: TabbarItemInfo;

  @HostBinding(`class.${prefix}-tabbar-item`)
  get tabbarItem() {
    return true;
  }

  get textCls() {
    return `${prefix}-tabbar-txt`;
  }

  @Input() templateRef: TemplateRef<TabbarItemInfo>;

  constructor(
    public view: ViewContainerRef
  ) { }

  ngOnInit() { }

}
