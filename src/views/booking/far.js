/** @format */

import $ from 'jquery';
import { treatsTable } from '../treatments/gettreat-item';
import { roomsTable } from '../rooms/getroom-item';
import { Card } from '../../cart/cart';

export const far = () => {
  const card = new Card();
  const i = $(`<i class="far fa-trash-alt"></i>`);

  i.on('click', function() {
    $(this)
      .prev()
      .prev()
      .text();

    treatsTable.map((t, index) => {
      t.name ===
      $(this)
        .prev()
        .prev()
        .text()
        ? treatsTable.splice(index, 1)
        : null;
      card.cookieStringAdd();
    });

    roomsTable.map((t, index) => {
      t.name ===
      $(this)
        .prev()
        .prev()
        .text()
        ? roomsTable.splice(index, 1)
        : console.log('usunal pokoj');
      card.cookieStringAdd();
    });
    if (roomsTable.length === 0 && treatsTable.length === 0) {
      $('.fa-cart-plus').remove();
    }

    $(this)
      .parent()
      .remove();
  });

  return i;
};
