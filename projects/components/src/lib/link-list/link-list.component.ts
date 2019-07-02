import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
export interface LinkListItem {
  picture: string;
  desc: string;
  link: string;
}
@Component({
  selector: 'xoyo-link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.scss']
})
export class LinkListComponent implements OnInit {
  @Input() dataList: LinkListItem[];
  @Input() listWrap?: boolean;
  @Output() whenClick: EventEmitter<LinkListItem> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  doClick(item: LinkListItem) {
    this.whenClick.next(item)
  }

}
