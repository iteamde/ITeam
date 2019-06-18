import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { slideInAnimation } from '../route-animation';

@Component({
  selector: 'app-services-page',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.scss'],
  animations: [
    slideInAnimation
  ]
})
export class ServicesPageComponent implements OnInit {

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  showServiceDetails(service: string) {
    this.router.navigate([service], {
      relativeTo: this.activatedRoute
    });
  }

}
