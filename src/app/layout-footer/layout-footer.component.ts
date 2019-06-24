import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NavbarItemInfo } from '@xoyo/components';
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

  navList: NavbarItemInfo[] = [
    {
      title: '首　　页',
      picture: '//xoyo.xoyocdn.com/mobile/img/icon-drawer-home.809983da.png',
      link: 'home'
    },
    {
      title: '游戏中心',
      picture: '//xoyo.xoyocdn.com/mobile/img/icon-drawer-game.38ed066d.png',
      link: 'game-center'
    },
    {
      title: '充值中心',
      picture: '//xoyo.xoyocdn.com/mobile/img/icon-drawer-charge.8c100f24.png',
      link: 'charge'
    },
    {
      title: '安全中心',
      picture: '//xoyo.xoyocdn.com/mobile/img/icon-drawer-security.a331b7fc.png',
      link: 'security'
    },
    {
      title: '个人中心',
      picture: '//xoyo.xoyocdn.com/mobile/img/icon-drawer-ucenter.4f6dcc95.png',
      link: 'profile'
    }
  ];

  constructor(public store: Store<any>) {
    this.store.select('router').subscribe(res => console.log(res));
  }

  ngOnInit() { }
}
