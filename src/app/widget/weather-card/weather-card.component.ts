import {Component, Input, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {Hotel} from '../../_shared/interfaces';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent implements OnInit, OnChanges {

  @Input() hotel: Hotel;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['hotel']) {
      console.log('__Input data came from Parent component__');
    }
  }

}
