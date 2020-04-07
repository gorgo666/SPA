/** @format */

import $ from 'jquery';
import { far } from '../booking/far';

export const room = t => {
  const div = $('<div class="room"></div>');

  div
    .append(`<p>${t.name}</p>`)
    .append(`<p>${t.cost}</p>`)
    .append(far());

  return div;
};
