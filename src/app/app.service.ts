import { Injectable, Inject } from '@angular/core';
import { NavbarItemInfo } from '@xoyo/components';
import { BehaviorSubject } from 'rxjs';
import { DOCUMENT } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class AppService {
  navList: BehaviorSubject<NavbarItemInfo[]> = new BehaviorSubject([]);
  tabList: BehaviorSubject<NavbarItemInfo[]> = new BehaviorSubject([]);
  title: BehaviorSubject<string> = new BehaviorSubject(``);
  titleMap: { [key: string]: string } = {};
  constructor(@Inject(DOCUMENT) public doc: Document) { }
  async init() {
    this.titleMap = {
      home: ``,
      profile: `个人中心`,
      security: `安全中心`,
      charge: `充值`,
      [`game-center`]: `游戏中心`
    };
    this.setTitle(``);
    this.setTabList();
    this.setNavList();
  }
  setTitle(name: string) {
    const title = this.titleMap[name];
    this.title.next(title);
    this.doc.title = title;
  }
  setTabList() {
    this.tabList.next([{
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
    }]);
  }
  setNavList() {
    this.navList.next([{
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
    }]);
  }
}
