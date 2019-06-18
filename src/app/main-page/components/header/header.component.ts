import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { RoutesConstants } from '../../../shared/constants/routes.constant';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  isHomePage: boolean;
  readonly homeUrlPath =
    `${'/'}${RoutesConstants.mainPage.path}${RoutesConstants.mainPage.home.path ? ('/' + RoutesConstants.mainPage.home.path) : ''}`;

  routingService: string = RoutesConstants.mainPage.services.path;
  routingCustomers: string = RoutesConstants.mainPage.customers.path;
  routingOurTeam: string = RoutesConstants.mainPage.ourTeam.path;
  routingContactUs: string = RoutesConstants.mainPage.contact.path;
  routingCalculator: string = RoutesConstants.mainPage.calculator.path;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.isHomePage = this.router.url === this.homeUrlPath;
    this.router.events
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(event => {
        if (event instanceof NavigationStart) {
          this.isHomePage = event.url === this.homeUrlPath;
        }
      });
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}
