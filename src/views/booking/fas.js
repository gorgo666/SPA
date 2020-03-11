/** @format */

import $ from 'jquery';
export const fas = () => {
  const i = $(`<i class="fas fa-pen-square"></i>`);

  i.on('click', function() {
    $(this)
      .prev()
      .prev()
      .prev()
      .text();

    console.log(treatsTable);
    treatsTable.map((t, index) => {
      t.name ===
      $(this)
        .prev()
        .prev()
        .text()
        ? treatsTable.splice(index, 1)
        : console.log('');
    });

    $(this)
      .parent()
      .remove();
  });

  return i;
};
