import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { prefix } from '../core';

@Component({
  selector: 'xoyo-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() title: string;
  navOpen = false;

  get layer() {
    return `${prefix}-layer`;
  }
  get layerContent() {
    return `${prefix}-layer-content`;
  }

  // 导航列表
  navList = [
    {
      title: '首　　页',
      picture: '//xoyo.xoyocdn.com/mobile/img/icon-drawer-home.809983da.png',
    },
    {
      title: '游戏中心',
      picture: '//xoyo.xoyocdn.com/mobile/img/icon-drawer-game.38ed066d.png',
    },
    {
      title: '充值中心',
      picture: '//xoyo.xoyocdn.com/mobile/img/icon-drawer-charge.8c100f24.png',
    },
    {
      title: '安全中心',
      picture: '//xoyo.xoyocdn.com/mobile/img/icon-drawer-security.a331b7fc.png',
    },
    {
      title: '个人中心',
      picture: '//xoyo.xoyocdn.com/mobile/img/icon-drawer-ucenter.4f6dcc95.png',
    },
    {
      title: '论　　坛',
      picture: '//xoyo.xoyocdn.com/mobile/img/icon-drawer-bbs.7bed4c1e.png',
    }
  ];
  constructor() { }

  ngOnInit() {
  }
  navToogle() {
    this.navOpen = !this.navOpen;
  }
}
