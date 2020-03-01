/** @format */

import $ from 'jquery';
const treatsTable = [];
import img from '../../img/treat4.jpg';

export const treatListItem = t => {
  const div = $(
    `<div class="item" style="background-image: url(${t.url})"></div>`
  );
  console.log(img);

  const pname = $(`<p class="name">${t.name}</p>`);
  const pprice = $(`<p class="price">${t.price} PLN</p>`);
  const parea = $(`<p class="beds">doskonały na ${t.area}</p>`);
  const ptime = $(`<p class="guest">czas ${t.time}</p>`);
  const pbtn = $(`<button class="pbtn">DODAJ</button>`);
  div
    .append(pname)
    .append(pprice)
    .append(parea)
    .append(ptime)
    .append(pbtn);

  div.hover(function() {
    const at = $(this).attr('style');

    $(this)
      .find('.name')
      .hide();
    $(this)
      .find('.price')
      .hide();
    $(this)
      .find('.beds')
      .show();
    $(this)
      .find('.guest')
      .show();
    div.append(pbtn);

    $(this).mouseleave(function() {
      $(this).attr('style', `${at}`);
      $('.name').show();
      $('.price').show();
      $('.beds').hide();
      $('.guest').hide();
    });
  });

  pbtn.click(function() {
    const treatName = $(this)
      .parent()
      .find('.name')
      .text();

    const treatCost = $(this)
      .parent()
      .find('.price')
      .text();
    treatsTable.push({
      name: treatName,
      cost: treatCost
    });
    console.log(treatsTable);
  });

  return div;
};
