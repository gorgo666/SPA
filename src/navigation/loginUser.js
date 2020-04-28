/** @format */

import $ from 'jquery';
import { isLogin } from '../views/logowanie/login-class';
let exist = false;

export const loginUser = () => {
  let div = $(`<div class="userlogin"></div>`);

  if (isLogin && exist === false) {
    $('.userlogin').append('<div>zalogowany</div>');
    exist = true;
  }

  return div;
};
