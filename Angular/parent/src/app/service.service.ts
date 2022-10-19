import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  private data = new BehaviorSubject<any>('default');
  public recieve = this.data.asObservable();

  update(dat: any) {
    this.data.next(dat);
  }
  constructor() {}
}
