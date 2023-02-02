/* eslint-disable no-undef */
const fs = require("fs");

const src = process.argv[2];
const dest = process.argv[3];
console.log(src, dest);

function copyFile(src, dest, callback) {
  fs.cp(src, dest, (err) => {
    if (err) {
      console.log(err);
      return err;
    }
    callback();
  });
}

copyFile(src, dest, () => {
  console.log("done");
});
