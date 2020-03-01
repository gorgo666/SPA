/** @format */

import $ from 'jquery';
import { treatListItem } from './gettreat-item';

export const treatsList = treat => {
  const div = $(`<div class="items"></div>`);
  treat.map(t => {
    div.append(treatListItem(t));
  });

  return div;
};
