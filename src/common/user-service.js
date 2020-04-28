/** @format */

export const userService = {
  getUsers(email) {
    console.log(email);
    return fetch(
      `http://localhost:3000/users?email=${email}`
    ).then((response) => response.json());
  },
};
