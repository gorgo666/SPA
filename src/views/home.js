/** @format */

import $ from 'jquery';
import img1 from '../img/room1.jpg';
import img2 from '../img/room2.jpg';
import img3 from '../img/room3.jpg';

export const home = () => {
  const fragment = $(new DocumentFragment());
  const div = $(`
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
        <img src="${img1}" class="d-block w-100" alt="room1">
    </div>
    <div class="carousel-item">
      <img src="${img2}" class="d-block w-100" alt="room2">
    </div>
    <div class="carousel-item">
      <img src="${img3}" class="d-block w-100" alt="room3">
    </div>
  </div>
</div>
<div class="main-side">
<div class="main-side-item">
<h3>O NAS</h3>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam architecto porro, similique temporibus odit reprehenderit dolorem! Debitis rem, ratione ullam quam, non magnam modi fugiat, deserunt commodi suscipit atque ex.</p>
</div>

<div class="main-side-item">
<h3>POKOJE</h3>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam architecto porro, similique temporibus odit reprehenderit dolorem! Debitis rem, ratione ullam quam, non magnam modi fugiat, deserunt commodi suscipit atque ex.</p>
</div>

<div class="main-side-item">
<h3>ZABIEGI</h3>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam architecto porro, similique temporibus odit reprehenderit dolorem! Debitis rem, ratione ullam quam, non magnam modi fugiat, deserunt commodi suscipit atque ex.</p>
</div>

<div class="main-side-item">
<h3>WARUNKI REZERWACJI</h3>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam architecto porro, similique temporibus odit reprehenderit dolorem! Debitis rem, ratione ullam quam, non magnam modi fugiat, deserunt commodi suscipit atque ex.</p>
</div>
</div>`);

  fragment.append('<h2>STRONA GŁÓWNA</h2>').append(div);

  return fragment;
};
