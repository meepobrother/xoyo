import { Component, Input,  OnInit, HostBinding, HostListener, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'xoyo-toogle-btn',
  templateUrl: './toogle-btn.component.html',
  styleUrls: ['./toogle-btn.component.scss']
})
export class ToogleBtnComponent implements OnInit {

  @HostBinding('class.open')
  @Input()
  open: boolean = false;

  @Output()
  openChange: EventEmitter<boolean> = new EventEmitter();

  @HostListener('click', ['$event'])
  toogle() {
    this.open = !this.open;
    this.openChange.emit(this.open);
  }
  constructor() { }

  ngOnInit() { }
}
