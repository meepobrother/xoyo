import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  list: any[] = [{
    label: '绑定手机',
    disabled: true,
    value: '13140415408',
    placeholder: "手机号码",
    isCode: false
  }, {
    label: '验证码',
    disabled: false,
    value: '',
    placeholder: "6位数字验证码",
    isCode: true
  }];

  tabs: any[] = [{
    title: '手机修改',
    active: true,
    image: {
      src: '//xoyo.xoyocdn.com/mobile/img/icon-phone-pink.150bb931.png',
      width: '13px'
    }
  }, {
    title: '邮箱修改',
    active: false,
    image: {
      src: '//xoyo.xoyocdn.com/mobile/img/icon-mail-yellow.d10cd17d.png',
      width: '13px'
    }
  }]
  constructor() { }

  ngOnInit() { }

}
