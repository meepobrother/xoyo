import { Component, OnInit } from '@angular/core';
import { TitleService } from '@xoyo/components';
import { AppService } from '../app.service';
@Component({
  selector: 'app-layout-footer',
  templateUrl: './layout-footer.component.html',
  styleUrls: ['./layout-footer.component.scss']
})
export class LayoutFooterComponent implements OnInit {
  constructor(public title: TitleService, public app: AppService) { }
  ngOnInit() { }
}
