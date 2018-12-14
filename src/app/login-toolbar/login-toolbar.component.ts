import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ObservableMedia, MediaChange } from '@angular/flex-layout';

@Component({
  selector: 'app-login-toolbar',
  templateUrl: './login-toolbar.component.html',
  styleUrls: ['./login-toolbar.component.scss']
})
export class LoginToolbarComponent implements OnInit {

  public state = '';

  constructor(public media: ObservableMedia) {
    media.asObservable()
      .subscribe((change: MediaChange) => {
        this.state = change ? `'${change.mqAlias}'` : '';
    });
  }

  ngOnInit() {
  }

}
