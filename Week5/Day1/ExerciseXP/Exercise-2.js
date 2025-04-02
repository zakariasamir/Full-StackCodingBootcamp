const pro = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('success');
  }, 4000);
});

pro.then((message) => {
  console.log(message);
});