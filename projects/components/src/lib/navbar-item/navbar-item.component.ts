import { Component, OnInit, Input, TemplateRef } from '@angular/core';
export interface NavbarItemInfo {
  title: string;
  picture: string;
  link: string;
}
@Component({
  selector: 'xoyo-navbar-item',
  templateUrl: './navbar-item.component.html',
  styleUrls: ['./navbar-item.component.scss']
})
export class NavbarItemComponent implements OnInit {
  @Input() info: NavbarItemInfo;
  @Input() templateRef: TemplateRef<NavbarItemInfo>;
  constructor() { }
  ngOnInit() { }
}
