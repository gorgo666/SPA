/** @format */
import $ from 'jquery';
import { mindate } from './mindate';
import { maxdate } from './maxdate';
import { treatsTable } from '../treatments/gettreat-item';
import { roomsTable } from '../rooms/getroom-item';
import './booking.scss';
import fontawesome from '@fortawesome/fontawesome-free/css/all.css';
import '../../css/fontawesome.min.css';
import { treat } from './treat';
import { room } from './room';
import { Card } from '../../cart/cart';

export const bookingItem = () => {
  const card = new Card();
  const book = $(`<div class="container"></div>`);

  const dateContainer = $(`<div class="dateContainer"></div>`);

  const bookDateMin = $(
    `<input type="date" min="${mindate()}" max="${maxdate()}">`
  );

  const bookDateMax = $(
    `<input type="date" min="${mindate()}" max="${maxdate()}">`
  );
  dateContainer.append(bookDateMin).append(bookDateMax);

  const roomsContainer = $(`<div class="roomsContainer"></div>`);
  const treatsContainer = $(`<div class="treatsContainer"></div>`);

  treatsTable.map(t => {
    treatsContainer.append(treat(t));
  });
  roomsTable.map(r => {
    roomsContainer.append(room(r));
  });
  let bin = '';
  if (treatsTable.length !== 0 || roomsTable.length !== 0) {
    bin = $('<i class="fas fa-cart-plus"></i>');
    bin.on('click', () => {
      card.cookieStringAdd();
      console.log(bookDateMin);
    });
  }
  bookDateMin.on('change', e => {
    card.startDate(e.target.value);
  });

  bookDateMax.on('change', e => {
    card.endDate(e.target.value);
  });

  book
    .append(dateContainer)
    .append(roomsContainer)
    .append(treatsContainer)
    .append(bin);

  return book;
};
