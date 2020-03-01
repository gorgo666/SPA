/** @format */

import $ from 'jquery';
import { roomsService } from '../common/rooms-service';
import { roomsList } from './rooms/getroom';
import './rooms/room.scss';

export const rooms = () => {
  let div = $('<div class="rooms"></div>');
  const fragment = $(new DocumentFragment());
  roomsService.getRooms().then(room => {
    div.append(roomsList(room));
  });

  fragment.append('<h2>Pokoje</h2>').append(div);

  return fragment;
};
