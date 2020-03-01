/** @format */
import $ from 'jquery';
import { roomListItem } from './getroom-item';

export const roomsList = room => {
  const div = $(`<div class="items"></div>`);
  room.map(r => {
    div.append(roomListItem(r));
  });

  return div;
};
