import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  list: any[] = [{
    label: '手 机',
    value: "",
    isCode: false,
    placeholder: "1[3/4/5/6/7/8/9]开头"
  }, {
    label: '验证码',
    isCode: true,
    value: "",
    placeholder: "6位数字验证码"
  }];
  constructor(public app: AppService) {
    this.app.setTitle(`register`);
  }

  ngOnInit() {
  }

}
