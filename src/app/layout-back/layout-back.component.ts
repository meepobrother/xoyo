import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-layout-back',
  templateUrl: './layout-back.component.html',
  styleUrls: ['./layout-back.component.scss']
})
export class LayoutBackComponent implements OnInit {

  constructor(public app: AppService) { }

  ngOnInit() {
  }

}
