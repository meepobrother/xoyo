import { Component, EventEmitter, OnInit, Input, HostBinding, Output } from '@angular/core';
export interface TopTab {
  active: boolean;
  image: string | { src: string, width: string };
  title: string;
}
@Component({
  selector: 'xoyo-top-tap',
  templateUrl: './top-tap.component.html',
  styleUrls: ['./top-tap.component.scss']
})
export class TopTapComponent implements OnInit {
  @Input()
  tabs: TopTab[] = [];

  @HostBinding('class.top-tap')
  topTap: boolean = true;

  @Output()
  whenTabChange: EventEmitter<TopTab> = new EventEmitter();

  checkImageIsString(item: TopTab) {
    return typeof item.image === 'string'
  }
  constructor() { }
  ngOnInit() { }

  setActiveTab(item: TopTab) {
    this.tabs.map(it => it.active = false);
    item.active = true;
    this.whenTabChange.next(item);
  }
}
