/** @format */

import $ from 'jquery';
import { bookingItem } from './booking/booking-item';

export const booking = () => {
  const fragment = $(new DocumentFragment());

  fragment.append('<h2>Booking</h2>').append(bookingItem());

  return fragment;
};
