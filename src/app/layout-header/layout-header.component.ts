import { Component, OnInit, } from '@angular/core';
import { AppService } from '../app.service';
import { Router, } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-layout-header',
  templateUrl: './layout-header.component.html',
  styleUrls: ['./layout-header.component.scss']
})
export class LayoutHeaderComponent implements OnInit {
  isBack: boolean = true;
  constructor(public app: AppService, public location: Location) { }
  ngOnInit() { }

  doBack() {
    console.log(`back`)
    this.location.back();
  }
}
