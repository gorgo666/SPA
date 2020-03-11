/** @format */

import { treatsTable } from '../views/treatments/gettreat-item';
import { roomsTable } from '../views/rooms/getroom-item';
import $ from 'jquery';
let startDate = '';
let endDate = '';

//dodaje ciasteczka
export class Card {
  constructor() {
    this.key = 'IT_SPA_CART';
  }

  //tworzenie ciasteczek
  cookieStringAdd() {
    document.cookie = `${
      this.key
    }=[{"rooms":${this.cookieroomAdd()}},{"treat":${this.cookietreatAdd()}}, {"startdate": "${startDate}"}, {"enddate": "${endDate}"}]`;
  }
  //zamienia tablice pokoi z obiektu na text
  cookieroomAdd() {
    return JSON.stringify(roomsTable);
  }
  //zamienia tablice zabiegów z obiektu na text
  cookietreatAdd() {
    return JSON.stringify(treatsTable);
  }
  //zwraca poczatkową datę rezerwacji
  startDate(start) {
    return (startDate = start);
  }
  //zwraca końcową datę rezerwacji
  endDate(end) {
    return (endDate = end);
  }
}
