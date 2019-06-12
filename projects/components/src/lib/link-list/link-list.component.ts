import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'xoyo-link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.scss']
})
export class LinkListComponent implements OnInit {
  @Input() dataList: { picture: string, desc: string }[];
  @Input() listWrap?: boolean;
  constructor() { }

  ngOnInit() {
  }

}
