/** @format */

import $ from 'jquery';
import './logowanie/logowanie.scss';

import { Login } from './logowanie/login-class';

export const logowanie = () => {
  const login = new Login();
  const fragment = $(new DocumentFragment());
  const div = $('<div class="login"></div>');

  div.append(login.formNewUser()).append(login.formExistUser());
  fragment.append('<h2>REJESTRACJA</h2>').append(div);

  return fragment;
};
