import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  featureList: { picture: string; desc: string; }[];
  constructor(public app: AppService) {
    this.app.setTitle(`profile`);
    this.featureList = [{
      picture: '//xoyo.xoyocdn.com/mobile/img/icon-balance.08efc043.png',
      desc: '余额查询',
    }, {
      picture: '//xoyo.xoyocdn.com/mobile/img/icon-charge-record.acacbd0e.png',
      desc: '充值记录',
    }, {
      picture: '//xoyo.xoyocdn.com/mobile/img/icon-identity-auth.04226371.png',
      desc: '实名认证',
    }, {
      picture: '//xoyo.xoyocdn.com/mobile/img/icon-change-password.62e62960.png',
      desc: '修改密码',
    }, {
      picture: '//xoyo.xoyocdn.com/mobile/img/icon-security.4921bf7c.png',
      desc: '安全设置',
    }];
  }

  ngOnInit() { }

}
