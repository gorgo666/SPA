/** @format */

import $ from 'jquery';

import { Router } from '../../router/router';
import { Card } from '../../cart/cart';

export const treatListItem = (t) => {
  const router = new Router();
  const card = new Card();
  const div = $(
    `<div class="item" style="background-image: url(${t.url})"></div>`
  );

  const pname = $(`<p class="name">${t.name}</p>`);
  const pprice = $(`<p class="price">${t.price} PLN</p>`);
  const parea = $(`<p class="beds">doskonały na ${t.area}</p>`);
  const ptime = $(`<p class="guest">czas ${t.time}</p>`);
  const pbtn = $(`<button class="pbtn">DODAJ</button>`);
  div.append(pname).append(pprice).append(parea).append(ptime).append(pbtn);

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
    const treatName = $(this).parent().find('.name').text();

    const treatCost = $(this).parent().find('.price').text();
    card.treatsTablePush(treatName, treatCost);
    router.navigate('/booking');
    card.cookieStringAdd();
  });

  return div;
};
