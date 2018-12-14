import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ObservableMedia, MediaChange } from '@angular/flex-layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'zippy-crowd';
  public state = '';
  centerImage: any = './assets/images/center.png';

  constructor(public media: ObservableMedia) {
    media.asObservable()
      .subscribe((change: MediaChange) => {
        this.state = change ? `'${change.mqAlias}'` : '';
    });
  }

  ngOnInit() { }

}
