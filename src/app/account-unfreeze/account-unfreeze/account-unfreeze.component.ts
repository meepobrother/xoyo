import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-unfreeze',
  templateUrl: './account-unfreeze.component.html',
  styleUrls: ['./account-unfreeze.component.scss']
})
export class AccountUnfreezeComponent implements OnInit {
  tabs: any[] = [{
    title: '手机解冻',
    image: {
      src: '//xoyo.xoyocdn.com/mobile/img/icon-phone-pink.150bb931.png',
      width: '13px'
    },
    active: true
  }, {
    title: '身份解冻',
    image: {
      src: '//xoyo.xoyocdn.com/mobile/img/icon-mail-yellow.d10cd17d.png',
      width: '13px'
    },
    active: false
  }];

  list: any[] = [{
    label: '账号',
    value: '13140415408',
    placeholder: '',
    disabled: true
  }, {
    label: '手机',
    value: '13140415408',
    placeholder: '',
    disabled: true
  }, {
    label: '验证码',
    value: '',
    placeholder: '6位数字验证码',
    disabled: false
  }];
  constructor() { }

  ngOnInit() {
  }

}
