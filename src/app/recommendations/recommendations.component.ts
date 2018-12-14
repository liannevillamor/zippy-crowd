import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ObservableMedia, MediaChange } from '@angular/flex-layout';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.scss']
})
export class RecommendationsComponent implements OnInit {

  myControl = new FormControl();
  options: string[] = ['Hairdresser', 'Plumber', 'UX Designer', 'Frontend Developer', 'Digital Marketer', 'Babysitter'];
  filteredOptions: Observable<string[]>;
  recsImage: any = '../assets/images/recs.png';
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(map(result => result.matches));
  isTablet$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Tablet).pipe(map(result => result.matches));
  isWeb$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Web).pipe(map(result => result.matches));
  public state = '';

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

}
