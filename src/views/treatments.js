/** @format */

import $ from 'jquery';
import { treatsService } from '../common/treats-service';
import { treatsList } from './treatments/gettreat';

export const treatments = () => {
  let div = $('<div class="treatments"></div>');
  const fragment = $(new DocumentFragment());
  treatsService.getTreats().then(treat => {
    div.append(treatsList(treat));
  });

  fragment.append('<h2>ZABIEGI</h2>').append(div);

  return fragment;
};
