import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-background',
  templateUrl: './landing-background.component.html',
  styleUrls: ['./landing-background.component.scss']
})
export class LandingBackgroundComponent implements OnInit {

  backgroundImage: any = './assets/images/zippycrowd.png';

  constructor() { }

  ngOnInit() {
  }

}
