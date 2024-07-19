import { Injectable } from '@angular/core';
import {ActivatedRoute, NavigationEnd, NavigationStart, Router} from "@angular/router";
import {filter} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PrintService {

  static isPrint = false // !! JSON.parse(window.localStorage.getItem('isPrint') ?? 'false') // true // hack for now

  constructor(
    private router: Router,
    activatedRoute: ActivatedRoute
  ) {
    console.log('PrintService ctor', activatedRoute)
    this.router.events.pipe(
      filter((event) => event instanceof NavigationStart)
    ).subscribe((event: any) => {
      console.log('PrintService event', event)
      if ( event.url.includes('/print') ) {
        console.log('PrintService event.url.includes(\'/print\')')
        PrintService.isPrint = true
      }
      // this.currentRouteSubject.next(event.urlAfterRedirects);
    });
  }
}
