/** @format */
import $ from 'jquery';
import { Router } from '../../router/router';
import { Card } from '../../cart/cart';

export const roomListItem = (r) => {
  const card = new Card();
  const router = new Router();
  const div = $(
    `<div class="item" style="background-image: url(${r.url})"></div>`
  );

  const pname = $(`<p class="name">${r.name}</p>`);
  const pprice = $(`<p class="price">${r.price} PLN</p>`);
  const pbeds = $(`<p class="beds">ilość łóżek${r.beds}</p>`);
  const pguests = $(`<p class="guest">max. ilość gości ${r.guests}</p>`);
  const pbtn = $(`<button class="pbtn">DODAJ</button>`);
  div.append(pname).append(pprice).append(pbeds).append(pguests).append(pbtn);

  div.hover(function () {
    const at = $(this).attr('style');

    $(this).find('.name').hide();
    $(this).find('.price').hide();
    $(this).find('.beds').show();
    $(this).find('.guest').show();
    div.append(pbtn);

    $(this).mouseleave(function () {
      $(this).attr('style', `${at}`);
      $('.name').show();
      $('.price').show();
      $('.beds').hide();
      $('.guest').hide();
    });
  });

  pbtn.click(function () {
    const roomName = $(this).parent().find('.name').text();

    const roomCost = $(this).parent().find('.price').text();
    card.roomsTablePush(roomName, roomCost);
    router.navigate('/booking');
    card.cookieStringAdd();
  });

  return div;
};
