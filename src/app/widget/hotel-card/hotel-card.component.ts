import {Component, OnInit} from '@angular/core';
import {EventBusService} from '../../common/services/event-bus/event-bus.service';
import {Hotel} from '../../_shared/interfaces';

@Component({
  selector: 'app-hotel-card',
  templateUrl: './hotel-card.component.html',
  styleUrls: ['./hotel-card.component.scss']
})
export class HotelCardComponent implements OnInit {

  hotel: Hotel;

  constructor(
    private eventBusService: EventBusService,
  ) {
    this.eventBusService.on('hotelSelected').subscribe((data) => {
      this.hotel = data;
    });
  }

  ngOnInit() {
  }

}
