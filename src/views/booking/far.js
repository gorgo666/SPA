/** @format */

import $ from 'jquery';
export const far = () => {
  const i = $(`<i class="far fa-trash-alt"></i>`);

  i.on('click', () => {
    console.log('usuwamy');
  });

  return i;
};
