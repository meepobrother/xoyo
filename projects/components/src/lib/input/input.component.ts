import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'xoyo-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input()
  placeholder: string;

  @Input()
  disabled: boolean = false;

  @Input()
  value: any;
  constructor() { }

  ngOnInit() {}

}
