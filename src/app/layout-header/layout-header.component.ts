import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-layout-header',
  templateUrl: './layout-header.component.html',
  styleUrls: ['./layout-header.component.scss']
})
export class LayoutHeaderComponent implements OnInit {
  constructor(public store: Store<any>) {
    this.store.select('router').subscribe(res => console.log(res));
  }
  ngOnInit() { }
}
