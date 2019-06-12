import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { prefix } from '../core';

@Component({
  selector: 'xoyo-cell-item',
  templateUrl: './cell-item.component.html',
  styleUrls: ['./cell-item.component.scss']
})
export class CellItemComponent implements OnInit {
  /**
   * xoyo-cell-item
   */
  @HostBinding(`class.${prefix}-cell-item`)
  cellItem: boolean = true;

  /**
   * 标题
   */
  @Input()
  title: string;

  /**
   * 图标
   */
  @Input()
  icon: string;

  @Input()
  tip: string;

  /**
   * 图标样式
   */
  get cellIcon() {
    return `${prefix}-cell-icon`;
  }

  /**
   * 箭头
   */
  private _arrow: boolean;
  @Input()
  set arrow(a: boolean) {
    this._arrow = !!a;
  }
  get arrow() {
    return this._arrow;
  }

  get cellItemLeft() {
    return `${prefix}-cell-left`;
  }

  get cellItemRight() {
    return `${prefix}-cell-right`;
  }

  constructor() { }
  ngOnInit() { }
}
