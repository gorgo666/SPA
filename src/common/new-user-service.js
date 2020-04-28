/** @format */

export const newUserService = {
  addUser(email, password) {
    const requestHeaders = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };

    const body = {
      email: email,
      pass: password,
      //   url: `http://pokeapi.co/media/sprites/pokemon/25.png`,
    };

    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: requestHeaders,
      body: JSON.stringify(body),
    }).then((res) => {
      alert('dodano nowego użytkownika: ' + email);
    });
  },
};
