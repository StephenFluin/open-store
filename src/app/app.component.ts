import { Component } from '@angular/core';
import { SiteConfigService } from './site-config.service';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <router-outlet *ngIf="!(siteConfig.menuStatus | async); else menu"></router-outlet>
    <ng-template #menu><app-menu-open></app-menu-open></ng-template>
    <app-footer></app-footer>
  `,
  styles: []
})
export class AppComponent {
  constructor(public siteConfig: SiteConfigService) {

  }
}
