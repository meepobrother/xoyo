import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { LinkListItem } from '@xoyo/components';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  securityList: LinkListItem[];
  mineList: LinkListItem[];

  constructor(
    public app: AppService,
    public router: Router
  ) {
    this.app.setTitle(`home`);
    this.securityList = [{
      picture: '//xoyo.xoyocdn.com/mobile/img/icon-change-password.62e62960.png',
      desc: '修改密码',
      link: 'change-password'
    }, {
      picture: '//xoyo.xoyocdn.com/mobile/img/icon-freeze.5b5efe41.png',
      desc: '账号冻结',
      link: 'account-freeze'
    }, {
      picture: '//xoyo.xoyocdn.com/mobile/img/icon-unfreeze.59178205.png',
      desc: '账号解冻',
      link: 'account-unfreeze'
    }, {
      picture: '//xoyo.xoyocdn.com/mobile/img/icon-kick.25ba316a.png',
      desc: '题号下线',
      link: 'kick'
    }];

    this.mineList = [{
      picture: '//xoyo.xoyocdn.com/mobile/img/icon-register.09367619.png',
      desc: '注册账号',
      link: 'register'
    }, {
      picture: '//xoyo.xoyocdn.com/mobile/img/icon-balance.08efc043.png',
      desc: '余额查询',
      link: 'balance'
    }, {
      picture: '//xoyo.xoyocdn.com/mobile/img/icon-charge-record.acacbd0e.png',
      desc: '充值记录',
      link: 'charge-record'
    }, {
      picture: '//xoyo.xoyocdn.com/mobile/img/icon-identity-auth.04226371.png',
      desc: '实名认证',
      link: 'identity-auth'
    }]
  }

  ngOnInit() { }

  doClick(item: LinkListItem) {
    this.router.navigate([item.link])
  }

}
