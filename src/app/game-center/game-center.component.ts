import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { TopTab } from '@xoyo/components';

@Component({
  selector: 'app-game-center',
  templateUrl: './game-center.component.html',
  styleUrls: ['./game-center.component.scss']
})
export class GameCenterComponent implements OnInit {
  tabs: TopTab[] = [{
    active: true,
    image: "//xoyo.xoyocdn.com/mobile/img/icon-gamepad.fff6ef9d.png",
    title: '热门游戏'
  }, {
    active: false,
    image: "//xoyo.xoyocdn.com/mobile/img/icon-tools.f535d801.png",
    title: '工具下载'
  }];

  constructor(public app: AppService) {
    this.app.setTitle(`game-center`);
  }

  ngOnInit() {
  }

}
