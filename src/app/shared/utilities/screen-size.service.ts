import { Injectable } from '@angular/core';
import { BehaviorSubject, fromEvent, Observable } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ScreenSizeService {
  private screenSize$: BehaviorSubject<string>;

  constructor() {
    this.screenSize$ = new BehaviorSubject<string>(this.getScreenSize());
    fromEvent(window, 'resize')
      .pipe(
        debounceTime(200),
        map(() => this.getScreenSize())
      )
      .subscribe((size) => this.screenSize$.next(size));
  }

  private getScreenSize(): string {
    const width = window.innerWidth;

    if (width <= 768) {
      return 'sm';
    } else {
      return 'xl';
    }
  }

  getScreenSizeObservable(): Observable<string> {
    return this.screenSize$.asObservable();
  }

  getCurrentScreenSize(): string {
    return this.screenSize$.getValue();
  }
}
