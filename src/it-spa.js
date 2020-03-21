/** @format */

import 'bootstrap/dist/css/bootstrap.css';
import './it-spa.scss';
import $ from 'jquery';
import { Router } from './router/router';
import { nav } from './navigation/nav';
import { Card } from './cart/cart';

const main = $('main');
const router = new Router();
const cart = new Card();

router.mount(main);

router.init();

main.before(nav());

if (cart.exist()) {
  cart.koszykHandle();
}
