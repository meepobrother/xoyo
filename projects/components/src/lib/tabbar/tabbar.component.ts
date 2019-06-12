import { Component, OnInit, HostBinding, Input, TemplateRef, ContentChild, ViewChild } from '@angular/core';
import { prefix } from '../core';
import { TabbarItemInfo } from '../tabbar-item/tabbar-item.component'
@Component({
  selector: 'xoyo-tabbar',
  templateUrl: './tabbar.component.html',
  styleUrls: ['./tabbar.component.scss']
})
export class TabbarComponent implements OnInit {

  @HostBinding(`class.${prefix}-tabbar`)
  isTabbar: boolean = true;

  @HostBinding(`class.${prefix}-tabbar-fixed`)
  @Input()
  isFixed: boolean = true;

  @Input()
  tabList: [];

  @Input()
  templateRef: TemplateRef<TabbarItemInfo>;

  constructor() { }

  ngOnInit() {}

}
