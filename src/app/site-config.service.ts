import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SiteConfigService {
  menuStatus = new BehaviorSubject<boolean>(false);
  constructor() { }
  toggleMenu() {
    this.menuStatus.next(!this.menuStatus.value)
  }
  
}
