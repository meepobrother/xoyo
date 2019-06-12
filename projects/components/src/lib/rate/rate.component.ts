import { Component, OnInit, HostBinding } from '@angular/core';
import { prefix } from '../core';
@Component({
  selector: 'xoyo-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.scss']
})
export class RateComponent implements OnInit {

  @HostBinding(`class.${prefix}-rate`)
  get rateClass() {
    return true;
  }

  constructor() { }

  ngOnInit() {
  }

}
