/** @format */

import $ from 'jquery';
import { userService } from '../../common/user-service';
let access = [];

export class Login {
  checkPass() {
    const input = $('<input type="submit"></input>');

    input.on('click', function(e) {
      e.preventDefault();

      const email = $(this)
        .parent()
        .find('.useremail')
        .val();

      const password = $(this)
        .parent()
        .find('.userepass')
        .val();

      console.log(email, password);

      if (access.length === 0) {
        access.push(email);
        access.push(password);
      }

      userService.getUsers(email).then(user => {
        if (user[0].email === email && user[0].pass === password) {
          alert('jesteś zalogowany');
        }
      });
      access = [];
    });

    return input;
  }

  formNewUserBody() {
    const body = $(`
    <p>zarejestruj się</p>
  <label for="email">email</label>
  <input type="email" class="useremail"></input>
  <label for="pass">hasło</label>
  <input type="password" class="userepass"></input>
  <label for="pass">powtórz hasło</label>
  <input type="password" class="userepass"></input>
`);
    return body;
  }

  formExistUserBody() {
    const body = $(`
    <p>zaloguj się</p>
    <label for="email">email</label>
    <input type="email" class="useremail"></input>
    <label for="pass">hasło</label>
    <input type="password" class="userepass"></input>
 
`);
    return body;
  }

  formNewUser() {
    const form = $('<form id="newuser" class="newuser"></form>');
    return form.append(this.formNewUserBody()).append(this.checkPass());
  }
  formExistUser() {
    const form = $('<form id="existuser" class="existuser"></form>');
    return form.append(this.formExistUserBody()).append(this.checkPass());
  }
}
