/** @format */

import $ from 'jquery';
import { bookingItem } from '../views/booking/booking-item';
export let startDate = '';
export let endDate = '';
export let treatsTable = [];
export let roomsTable = [];
let div = '';
let tableStartDate = [];
let tableEndDate = [];

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
    // document.body.append(this.updataKoszyk());
    this.koszykHandle();
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
    tableStartDate = start.split('-');
    this.checkDate();
    return (startDate = start);
  }
  //zwraca końcową datę rezerwacji
  endDate(end) {
    tableEndDate = end.split('-');
    this.checkDate();
    return (endDate = end);
  }
  checkDate() {
    if (
      parseInt(tableStartDate[0]) > parseInt(tableEndDate[0]) ||
      parseInt(tableStartDate[1]) > parseInt(tableEndDate[1]) ||
      parseInt(tableStartDate[2]) > parseInt(tableEndDate[2])
    ) {
      alert('data przyjazdu jest późniejsza od daty odjazdu');
      endDate = '';
      startDate = '';
    }
  }

  //szuka w ciasteczkach IT_SPA_CART
  cookie() {
    const cookies = document.cookie.split(';');
    const itSpaCookie = cookies.find(
      (cookie) =>
        cookie.startsWith(this.key) || cookie.startsWith(' IT_SPA_CART')
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
    return divroom;
  }
  //2.2 wypisanie zabiegów
  koszyktreat(t) {
    const divtreat = $(`<div><p>${t.name}</p><p>${t.cost}</p></div>`);
    return divtreat;
  }

  updataKoszyk() {
    if (this.exist()) {
      div = $('<div class="koszyk"><h3>Twoje zamówienie to:</h3></div>');
      const spa = this.cookie().split('=');
      const koszykData = JSON.parse(spa[1]);
      koszykData.map((item) => {
        if (item.rooms) {
          item.rooms.map((r) => {
            div.append(this.koszykroom(r));
          });
        } else if (item.treat) {
          item.treat.map((t) => {
            div.append(this.koszyktreat(t));
          });
        } else if (item.startdate) {
          div.append(`<p>Od: ${item.startdate}</p>`);
        } else if (item.enddate) {
          div.append(`<p>Do: ${item.enddate}</p>`);
        }
      });
    }
    return div[0];
  }

  koszykHandle() {
    $('.koszyk').remove();
    const koszyk = document.body.append(this.updataKoszyk());
    return koszyk;
  }
  koszykRemove() {
    $('.koszyk').remove();
    $('.container').remove();
    div = '';
    treatsTable = [];
    roomsTable = [];
    startDate = '';
    endDate = '';
  }
  treatsTablePush(treatName, treatCost) {
    treatsTable.push({
      name: treatName,
      cost: treatCost,
    });
  }
  roomsTablePush(roomName, roomCost) {
    roomsTable.push({
      name: roomName,
      cost: roomCost,
    });
  }
}
