import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ObservableMedia, MediaChange } from '@angular/flex-layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'zippy-crowd';
  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);
  public cols: Observable<number>;
  public state = '';
  centerImage: any = '../assets/images/center.png';

  constructor(private breakpointObserver: BreakpointObserver,
              public media: ObservableMedia) {
    media.asObservable()
      .subscribe((change: MediaChange) => {
        this.state = change ? `'${change.mqAlias}'` : '';
        console.log('STATE: ', this.state);
    });
  }

  ngOnInit() { }

}
