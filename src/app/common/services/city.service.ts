import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {City} from '../../_shared/interfaces';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  getCities(): Observable<{ result: City[] }> {
    return this.httpClient.get<{ result: City[] }>('./assets/data.json');
  }
}
