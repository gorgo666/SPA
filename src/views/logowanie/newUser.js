/** @format */

'use strict';

export function addUser() {
  const fs = require('fs');
  let student = '';
  fs.readFile('student.json', (err, data) => {
    if (err) throw err;
    let student = JSON.parse(data);
    console.log(student);
  });
  console.log('stu', student);
}
