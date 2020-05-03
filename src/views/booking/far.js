/** @format */

import $ from 'jquery';
import { treatsTable } from '../../cart/cart';
import { roomsTable } from '../../cart/cart';
import { Card } from '../../cart/cart';
import { Router } from '../../router/router';

export const far = () => {
  const card = new Card();
  const i = $(`<i class="far fa-trash-alt"></i>`);

  i.on('click', function () {
    $(this).prev().prev().text();

    treatsTable.map((t, index) => {
      t.name === $(this).prev().prev().text()
        ? treatsTable.splice(index, 1)
        : null;
      card.cookieStringAdd();
    });

    roomsTable.map((t, index) => {
      t.name === $(this).prev().prev().text()
        ? roomsTable.splice(index, 1)
        : console.log('usunal pokoj');
      card.cookieStringAdd();
    });
    if (roomsTable.length === 0 && treatsTable.length === 0) {
      $('.fa-cart-plus').remove();
      card.koszykRemove();
    }

    $(this).parent().remove();
    const refreshsite = new Router();

    card.updataKoszyk();
    card.cookieStringAdd();

    refreshsite.init();
  });

  return i;
};
