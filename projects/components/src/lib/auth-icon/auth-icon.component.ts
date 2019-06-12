import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'xoyo-auth-icon',
  templateUrl: './auth-icon.component.html',
  styleUrls: ['./auth-icon.component.scss']
})
export class AuthIconComponent implements OnInit {

  @Input()
  icon: string;

  @Input()
  status: 'success' | 'warning' = 'success';

  @HostBinding(`class.auth-icon`)
  authIcon: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
