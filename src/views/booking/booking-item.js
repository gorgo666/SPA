/** @format */

import $ from 'jquery';
import { mindate } from './mindate';
import { maxdate } from './maxdate';
import { treatsTable } from '../../cart/cart';
import { roomsTable } from '../../cart/cart';
import './booking.scss';
import fontawesome from '@fortawesome/fontawesome-free/css/all.css';
import '../../css/fontawesome.min.css';
import { treat } from './treat';
import { room } from './room';
import { Card } from '../../cart/cart';
import { startDate } from '../../cart/cart';
import { endDate } from '../../cart/cart';

export const bookingItem = () => {
  const card = new Card();
  const book = $(`<div class="container"></div>`);

  const dateContainer = $(`<div class="dateContainer"></div>`);
  let bin = '';
  let continueOrder = '';
  let sumOrder;

  if (treatsTable.length !== 0 || roomsTable.length !== 0) {
    continueOrder = $(
      '<button class="continueShopping">Kontynuuj zakupy</button>'
    );
    continueOrder.on('click', () => {
      history.back();
    });
    const bookDateMin = $(
      `<input type="date" value="${startDate}" min="${mindate(
        'arrival'
      )}" max="${maxdate()}">`
    );

    const bookDateMax = $(
      `<input type="date" value="${endDate}" min="${mindate(
        'departure'
      )}" max="${maxdate()}">`
    );

    dateContainer.append(bookDateMin).append(bookDateMax);

    bookDateMin.on('change', (e) => {
      card.startDate(e.target.value);
      card.cookieStringAdd();
    });

    bookDateMax.on('change', (e) => {
      card.endDate(e.target.value);
      card.cookieStringAdd();
    });

    sumOrder = $(`<h2 class="sumorder">Suma: </h2>`);
    const addSumOrder = () => {
      let treat = 0;
      let room = 0;

      treatsTable.map((t) => {
        treat = parseInt(treat) + parseInt(t.cost);
      });

      roomsTable.map((r) => {
        room = parseInt(room) + parseInt(r.cost);
      });

      return treat + room;
    };

    sumOrder.append(addSumOrder());

    bin = $('<i class="fas fa-cart-plus"></i>');

    bin.on('click', () => {
      if (bookDateMin[0].value === '' || bookDateMax[0].value === '') {
        alert('zaznacz daty do rezerwacji');
      } else if (bookDateMin[0].valueAsNumber > bookDateMax[0].valueAsNumber) {
        alert('data początkowa nie może być wieksza od daty końcowej');
      } else {
        alert('twoje zamówienie zostało potwierdzone');
        card.koszykRemove();
        card.endDate();
        card.startDate();
      }
    });
  }

  const roomsContainer = $(`<div class="roomsContainer"></div>`);
  const treatsContainer = $(`<div class="treatsContainer"></div>`);

  treatsTable.map((t) => {
    treatsContainer.append(treat(t));
  });
  roomsTable.map((r) => {
    roomsContainer.append(room(r));
  });

  book
    .append(continueOrder)
    .append(sumOrder)
    .append(dateContainer)
    .append(roomsContainer)
    .append(treatsContainer)
    .append(bin);

  return book;
};
