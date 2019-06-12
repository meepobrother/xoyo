import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-layout-footer',
  templateUrl: './layout-footer.component.html',
  styleUrls: ['./layout-footer.component.scss']
})
export class LayoutFooterComponent implements OnInit {
  tabList = [{
    title: '首页',
    picture: '//xoyo.xoyocdn.com/mobile/img/footer-nav-home-outline.c0b4e107.png',
    link: 'home',
  }, {
    title: '游戏',
    picture: '//xoyo.xoyocdn.com/mobile/img/footer-nav-game-outline.4f6bfa9f.png',
    link: 'game-center',
  }, {
    title: '充值',
    picture: '//xoyo.xoyocdn.com/mobile/img/footer-nav-charge-outline.d4efa33f.png',
    link: 'charge',
  }, {
    title: '安全',
    picture: '//xoyo.xoyocdn.com/mobile/img/footer-nav-safety-outline.95eae5e3.png',
    link: 'security',
  }, {
    title: '我',
    picture: '//xoyo.xoyocdn.com/mobile/img/footer-nav-ucenter-outline.e6c88426.png',
    link: 'profile',
  }];


  constructor() { }

  ngOnInit() { }
}
