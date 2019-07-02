import { Component, OnInit, HostBinding, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'xoyo-form-item',
  templateUrl: './form-item.component.html',
  styleUrls: ['./form-item.component.scss']
})
export class FormItemComponent implements OnInit {

  @HostBinding('class.form-item')
  formItem: boolean = true;

  @Input()
  label: string | TemplateRef<any>;

  get isLabelString() {
    return typeof this.label === 'string'
  }
  constructor() { }

  ngOnInit() {
  }

}
