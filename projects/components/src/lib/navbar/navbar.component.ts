import { Component, OnInit, Input, TemplateRef, ContentChild } from '@angular/core';
import { prefix } from '../core';
import { NavbarItemInfo } from '../navbar-item/navbar-item.component';
@Component({
  selector: 'xoyo-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() title: string;
  navOpen = false;
  @ContentChild(TemplateRef, { static: false })
  templateRef: TemplateRef<NavbarItemInfo>;
  @Input() list: NavbarItemInfo[] = [];
  get layer() {
    return `${prefix}-layer`;
  }
  get layerContent() {
    return `${prefix}-layer-content`;
  }
  constructor() { }
  ngOnInit() { }
  navToogle() {
    this.navOpen = !this.navOpen;
  }
}
