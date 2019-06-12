import { Component, OnInit } from '@angular/core';
import { prefix } from '../core'
@Component({
  selector: 'xoyo-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  get flexbox() {
    return `${prefix}-flexbox`;
  }

  get flexboxItem() {
    return `${prefix}-flexbox-item`;
  }

  constructor() { }

  ngOnInit() {
  }

}
