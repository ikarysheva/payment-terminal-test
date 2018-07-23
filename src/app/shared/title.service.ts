import { Injectable } from '@angular/core';

import { map, filter, mergeMap} from 'rxjs/operators';

import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Subject } from 'rxjs';

const SEPARATOR = ' > ';

const APP_TITLE = 'Payments:';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  private _currentTitle: string;
  titleChanged$ = new Subject<string>();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private title: Title
  ) {}

  static ucFirst(string) {
    if ( !string ) { return string; }
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  init() {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => {
        let route = this.activatedRoute;
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }),
      filter((route) => route.outlet === 'primary'),
      mergeMap((route) => route.data),
      map((data) => {
        if ( data.title ) {
          // If a route has a title set (e.g. data: {title: "Foo"}) then we use it
          return data.title;
        } else {
          // If not, we do a little magic on the url to create an approximation
          return this.router.url.split('/').reduce((acc, frag) => {
            if ( acc && frag ) { acc += SEPARATOR; }
            return acc + TitleService.ucFirst(frag);
          });
        }
      })
    ).subscribe( (pathString) => this.currentTitle = pathString );
  }

  set currentTitle(value) {
    this._currentTitle = value;
    this.title.setTitle(`${APP_TITLE} ${value}`);
    this.titleChanged$.next(value);
  }

  get currentTitle() {
    return this._currentTitle;
  }
}
