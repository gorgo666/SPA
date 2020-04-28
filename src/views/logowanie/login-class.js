/** @format */

import $ from 'jquery';

import { userService } from '../../common/user-service';
import { newUserService } from '../../common/new-user-service';

import { nav } from '../../navigation/nav';

let access = [];
export let isLogin = false;

export class Login {
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

    const passwordChecking = body.children('.userepass');

    let overEight = false;
    let number = false;
    let bigLetter;

    passwordChecking.keyup(function (e) {
      let value = e.target.value;
      bigLetter = false;

      for (let i = 0; i < value.length; i++) {
        if (Number.isInteger(Number(value[i]))) {
          number = true;
        }
        if (value.charAt(i) === value.charAt(i).toUpperCase()) {
          bigLetter = true;
        }
        if (value.length >= 8) {
          overEight = true;
        }
      }
    });

    body.on('submit', function (e) {
      e.preventDefault();

      let email = $(this).parent().find('.useremail').val();

      let password = $(this).parent().find('.userepass').val();

      let confirmPassword = $(this).parent().find('.userepassconf').val();

      if (overEight && number && bigLetter) {
        if (password === confirmPassword) {
          userService.getUsers(email).then((response) => {
            if (response[0]) {
              alert('taki użytownik już istnieje');
            } else {
              newUserService.addUser(email, password);
              email = '';
              password = '';
              confirmPassword = '';
            }
          });
        } else {
          alert(`"hasło" musi być takie samo jak "powtórz hasło"`);
        }
      } else {
        alert('hasło musi zawierać wielką literę, cyfrę oraz minimum 8 znaków');
      }
    });

    return body;
  }

  formExistUserBody() {
    const body = $(`
    <form id="existuser" class="existuser">
    <p>zaloguj się</p>
    <label for="email">email: </br><input value="email@email.com" type="email" class="useremail" required></input></label>    
    <label for="pass">hasło: </br><input value="Email123456" type="password" class="userepass" required></input></label>
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
        console.log(email, user);
        if (user[0].email === email && user[0].pass === password) {
          alert('jesteś zalogowany');
          isLogin = true;
          nav();
          isLogin = false;
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
