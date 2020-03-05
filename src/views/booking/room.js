/** @format */

import $ from 'jquery';
import { far } from '../booking/far';
import { fas } from '../booking/fas';

export const room = t => {
  const div = $('<div class="room"></div>');

  div
    .append(`<p>${t.name}</p>`)
    .append(`<p>${t.cost}</p>`)
    .append(far())
    .append(fas());

  return div;
};
