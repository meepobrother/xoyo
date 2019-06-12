import { Component, OnInit, HostBinding } from '@angular/core';
import { prefix } from '../core';

@Component({
  selector: 'xoyo-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {

  @HostBinding(`class.${prefix}-avatar`)
  avatar: boolean = true;

  get inner() {
    return `${prefix}-avatar-inner`;
  }

  constructor() { }

  ngOnInit() {
  }

}
