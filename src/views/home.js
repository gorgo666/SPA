/** @format */

import $ from 'jquery';

export const home = () => {
  const fragment = $(new DocumentFragment());

  fragment
    .append('<h2>HOME</h2>')
    .append('<p>Lorem ipsum dolor sit amet...</p>');

  return fragment;
};
