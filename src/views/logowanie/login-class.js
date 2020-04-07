/** @format */

import $ from 'jquery';

import { userService } from '../../common/user-service';
import { addUser } from './newUser';
let access = [];

export class Login {
  createUser() {
    const input = $('.sendnew');

    input;
    return input;
  }

  formNewUserBody() {
    const body = $(`
    <form id="newuser" class="newuser">
    <p>zarejestruj się</p>
    <label for="email">email</label>
    <input type="email" required class="useremail"></input>
    <label for="pass">hasło</label>
    <input type="password" class="userepass" required></input>
    <label for="pass">powtórz hasło</label>
    <input type="password" class="userepassconf" required></input>
    <input type="submit" class="sendnew"></input>
    </form>`);

    body.on('submit', function (e) {
      e.preventDefault();

      const email = $(this).parent().find('.useremail').val();

      const password = $(this).parent().find('.userepass').val();

      const confirmPassword = $(this).parent().find('.userepassconf').val();

      // console.log(email, password, confirmPassword);
      addUser();
    });

    return body;
  }

  formExistUserBody() {
    const body = $(`
    <form id="existuser" class="existuser">
    <p>zaloguj się</p>
    <label for="email">email: </br><input type="email" class="useremail" required></input></label>    
    <label for="pass">hasło: </br><input type="password" class="userepass" required></input></label>
    <input type="submit" class="send"></input>
    </form>
    `);

    body.on('submit', function (e) {
      e.preventDefault();

      const email = $(this).parent().find('.useremail').val();

      const password = $(this).parent().find('.userepass').val();

      if (access.length === 0) {
        access.push(email);
        access.push(password);
      }

      userService.getUsers(email).then((user) => {
        if (user[0].email === email && user[0].pass === password) {
          alert('jesteś zalogowany');
        } else {
          alert('nie udało Ci się zalogować!!');
        }
      });
      access = [];
    });
    return body;
  }

  formNewUser() {
    const form = $('<div></div>');
    return form.append(this.formNewUserBody());
  }
  formExistUser() {
    const form = $('<div></div>');
    return form.append(this.formExistUserBody());
  }
}
