import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavigationStart, Router, RouterOutlet } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { RoutesConstants } from '../shared/constants';
import { slideInAnimation } from './route-animation';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  animations: [
    slideInAnimation
  ]
})
export class MainPageComponent implements OnInit, OnDestroy {
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  isHomePage: boolean;
  readonly homeUrlPath =
    `${'/'}${RoutesConstants.mainPage.path}${RoutesConstants.mainPage.home.path ? ('/' + RoutesConstants.mainPage.home.path) : ''}`;

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isHomePage = this.router.url === this.homeUrlPath;
    this.router.events
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(event => {
      if (event instanceof NavigationStart) {
        this.isHomePage = event.url === this.homeUrlPath || event.url === '/';
      }
    });
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
