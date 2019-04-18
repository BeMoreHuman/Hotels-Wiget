import {Component, Input, OnInit, OnChanges, SimpleChanges, Output, EventEmitter} from '@angular/core';
import {City, Hotel} from '../../_shared/interfaces';
import {EventBusService} from '../../common/services/event-bus/event-bus.service';

@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.scss']
})
export class MainCardComponent implements OnInit, OnChanges {

  filterName = 'name';
  filters: string[] = ['name', 'rate'];

  @Input() city: City;

  @Output() selectedHotel: EventEmitter<number> = new EventEmitter();

  constructor(
    private eventBusService: EventBusService,
  ) {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['city']) {
      // console.log(this.city);
    }
  }

  selectHotel(hotel: Hotel): void {
    this.selectedHotel.emit(hotel.hotel_id);
    this.eventBusService.emit('hotelSelected', hotel);
  }

  filterHotels(event, filter: string): void {
    event.target.classList.add('main-card__filter--active');
    this.filterName = filter;
  }

}
