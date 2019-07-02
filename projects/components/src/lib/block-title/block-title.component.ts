import { Component, OnInit, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'xoyo-block-title',
  templateUrl: './block-title.component.html',
  styleUrls: ['./block-title.component.scss']
})
export class BlockTitleComponent implements OnInit {

  @HostBinding('class.block-title')
  blockTitle: boolean = true;

  @Input()
  title: string;

  @Input()
  arrow: string;
  constructor() { }

  ngOnInit() {
  }

}
