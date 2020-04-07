/** @format */

import $ from 'jquery';
import { far } from '../booking/far';

export const treat = t => {
  const div = $('<div class="treat"></div>');

  div
    .append(`<p>${t.name}</p>`)
    .append(`<p>${t.cost}</p>`)
    .append(far());

  return div;
};
