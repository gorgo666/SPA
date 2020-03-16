/** @format */

import $ from 'jquery';

export const koszyk = () => {
  const div = $(`<div class="cart">koszyk</div>`);
  div.hover(
    () => {
      $('.koszyk').addClass('handler');
    },
    () => {
      $('.koszyk').removeClass('handler');
    }
  );

  return div;
};
