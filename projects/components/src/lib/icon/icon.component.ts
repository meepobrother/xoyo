import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { prefix } from '../core';
export type IconType = 'cell' | 'tabbar';
@Component({
  selector: 'xoyo-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  @Input() type: IconType = 'cell';
  /**
   * 默认图标
   */
  @Input() src: string;
  /**
   * 激活图标
   */
  @Input() activeSrc: string;

  /**
   * 激活状态
   */
  @Input() active: boolean = false;

  /**
   * 个人中心项目icon
   */
  @HostBinding(`class.${prefix}-cell-icon`)
  get cellIcon() {
    return this.type === 'cell';
  }

  /**
   * 底部菜单icon
   */
  @HostBinding(`class.${prefix}-tabbar-icon`)
  get tabbarIcon() {
    return this.type === 'tabbar';
  }

  @Input()
  badge: string | number;

  @Input()
  get badgeClass() {
    return !!this.badge ? `${prefix}tabbar-badge` : null;
  }

  constructor() { }
  ngOnInit() { }
}
