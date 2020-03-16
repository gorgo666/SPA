/** @format */

import $ from 'jquery';

export const home = () => {
  const fragment = $(new DocumentFragment());

  fragment.append('<h2>HOME</h2>');

  return fragment;
};
