import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TitleService {
  title: BehaviorSubject<string> = new BehaviorSubject(`测试`);
  constructor() { }

  setTitle(t: string) {
    this.title.next(t);
  }
  
}
