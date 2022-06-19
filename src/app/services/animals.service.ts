import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AnimalsService {

  private url = 'https://61f12139072f86001749f044.mockapi.io/api/v1/animals';

  constructor(private httpClient: HttpClient) { }

  getAnimals() {
    return this.httpClient.get(this.url);
  }
}
