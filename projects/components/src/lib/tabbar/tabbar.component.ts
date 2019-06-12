import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { prefix } from '../core'
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


  constructor() { }

  ngOnInit() {
  }

}
