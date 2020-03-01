/** @format */

export const treatsService = {
  getTreats() {
    // pobiera liste wszystkich pokoi
    return fetch('http://localhost:3000/treatments').then(response =>
      response.json()
    );
  }
};
