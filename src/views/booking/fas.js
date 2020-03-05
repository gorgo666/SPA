/** @format */

import $ from 'jquery';
export const fas = () => {
  const i = $(`<i class="fas fa-pen-square"></i>`);

  i.on('click', () => {
    console.log('edytujemy');
  });

  return i;
};
