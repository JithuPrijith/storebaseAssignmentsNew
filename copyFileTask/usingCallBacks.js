const fs = require("fs");

// function to read the file
function readFromFS(src, dest, callback) {
  fs.readFile(src, (err, data) => {
    if (err) {
      console.log(err);
      return err;
    } else if (data) {
      callback(dest, data); //calling the write funtion from here!
    }
  });
}

// function to write file
function writeFromFS(dest, data) {
  fs.writeFile(dest, data, (err) => {
    if (err) {
      console.log(err);
      return err;
    } else {
      console.log("here");
      return "success"; // i expect this return success in the task function but result is undefined
    }
  });
}
function task(src, dest, writeFromFS) {
  return readFromFS(src, dest, writeFromFS);
}

// task function call
console.log(task("source.txt", "destination.txt", writeFromFS));
