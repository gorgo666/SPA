/** @format */

export const userService = {
  getUsers(email) {
    // pobiera liste wszystkich pokoi
    return fetch(`http://localhost:3000/users?email=${email}`)
      .then(response => response.json())
      .catch(console.log('ok'));
  }
};
