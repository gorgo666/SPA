/** @format */

export const userService = {
  getUsers(email) {
    // pobiera liste wszystkich pokoi
    return fetch(
      `http://localhost:3000/users?email=${email}`
    ).then((response) => response.json());
  },
  addUser(email, password) {
    const requestHeaders = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };

    const body = {
      id: 1,
      email: 'email@email.com',
      pass: 'masło',
    };

    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: requestHeaders,
      body: JSON.stringify(body),
    }).then((res) => {
      console.log(res);
    });
    console.log(email, password);
  },
};
