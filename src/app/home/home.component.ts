import { Component, OnInit } from '@angular/core';

export interface LinkList {
  picture: string;
  desc: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  securityList: LinkList[];
  mineList: LinkList[];

  constructor() {
    this.securityList = [{
      picture: '//xoyo.xoyocdn.com/mobile/img/icon-change-password.62e62960.png',
      desc: '修改密码',
    }, {
      picture: '//xoyo.xoyocdn.com/mobile/img/icon-freeze.5b5efe41.png',
      desc: '账号冻结',
    }, {
      picture: '//xoyo.xoyocdn.com/mobile/img/icon-unfreeze.59178205.png',
      desc: '账号解冻',
    }, {
      picture: '//xoyo.xoyocdn.com/mobile/img/icon-kick.25ba316a.png',
      desc: '题号下线',
    }];

    this.mineList = [{
      picture: '//xoyo.xoyocdn.com/mobile/img/icon-register.09367619.png',
      desc: '注册账号',
    }, {
      picture: '//xoyo.xoyocdn.com/mobile/img/icon-balance.08efc043.png',
      desc: '余额查询',
    }, {
      picture: '//xoyo.xoyocdn.com/mobile/img/icon-charge-record.acacbd0e.png',
      desc: '充值记录',
    }, {
      picture: '//xoyo.xoyocdn.com/mobile/img/icon-identity-auth.04226371.png',
      desc: '实名认证',
    }]
  }

  ngOnInit() { }

}
