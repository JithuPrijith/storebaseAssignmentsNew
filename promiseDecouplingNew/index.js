function factorial(x) {
  return new Promise((resolve) => {
    let result = x;
    for (let i = x - 1; i >= 1; i--) {
      result = result * i;
    }
    setTimeout(() => {
      resolve(result);
    }, 2000);
  });
}

function power(x, y) {
  return new Promise((resolve, reject) => {
    let result = x;
    for (let i = 1; i < y; i++) {
      result = result * x;
    }
    setTimeout(() => {
      resolve(result);
    }, 2000);
  });
}

function calculate(x, y) {
  let sum = 0;
  let resPromise = factorial(x)
    .then((res) => {
      console.log(res);
      sum += res;
      return factorial(y);
    })
    .then((res) => {
      console.log(res);
      sum += res;
      return power(x, y);
    })
    .then((res) => {
      console.log(res);
      sum += res;
      return power(y, x);
    })
    .then((res) => {
      console.log(res);
      sum += res;
      console.log(sum);
      return res;
    });
}

calculate(5, 4);
