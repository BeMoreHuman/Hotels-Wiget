import {Component, OnInit} from '@angular/core';
import {CityService} from './common/services/city.service';
import {City, Hotel} from './_shared/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Hotels Widget';
  cities: City[];
  selectedHotel: Hotel;

  constructor(
    private cityService: CityService,
  ) {
  }

  ngOnInit() {
    this.cityService.getCities().subscribe((data) => {
      this.cities = data.result;
    }, error => console.log(error));
  }

  updateHotel(hotelId: number): void {
    this.selectedHotel = this.cities[0].city_hotels.filter(hotel => hotel.hotel_id === hotelId)[0];
  }
}
