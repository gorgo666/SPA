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
    this.updataKoszyk();
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

  //szuka w ciasteczkach IT_SPA_CART
  cookie() {
    const cookies = document.cookie.split(';');
    const itSpaCookie = cookies.find(
      cookie => cookie.startsWith(this.key) || cookie.startsWith(' IT_SPA_CART')
    );
    return itSpaCookie;
  }
  //sprawdza czy ciateczka istnieją
  exist() {
    return this.cookie() !== undefined;
  }

  // 2.stworzenie koszyka po najechaniu myszką ma się rozwinąć

  //2.1 wypisanie pokoi
  koszykroom(r) {
    const divroom = $(`<div><p>${r.name}</p><p>${r.cost}</p></div>`);
    console.log(divroom);
    return divroom;
  }
  //2.2 wypisanie zabiegów
  koszyktreat(t) {
    const divtreat = $(`<div><p>${t.name}</p><p>${t.cost}</p></div>`);
    return divtreat;
  }
  test() {
    document.body.append(this.updataKoszyk());
  }

  updataKoszyk() {
    const div = $('<div class="koszyk"><h1>Twoje zamówienie to: </h1></div>');

    if (this.exist()) {
      const spa = this.cookie().split('=');
      const koszykData = JSON.parse(spa[1]);
      koszykData.map(item => {
        if (item.rooms) {
          item.rooms.map(r => {
            div.append(this.koszykroom(r));
          });
        } else if (item.treat) {
          item.treat.map(t => {
            div.append(this.koszyktreat(t));
          });
        } else if (item.startdate) {
          div.append(`<p>Od: ${item.startdate}</p>`);
          console.log(item.startdate);
        } else if (item.enddate) {
          div.append(`<p>Do: ${item.enddate}</p>`);
        }
      });
    }
    return div[0];
  }
}
