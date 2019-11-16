let main = async () => {
  return await foo();
};

let foo = async () => {
  return new Promise((resolve, reject) => {
    console.log(">>> foo");
    resolve('ok');

    // reject('this is error');
  });
};

main()
  .then(value => {
    console.log('val:', value);
  })
  .catch(e => {
    console.log('catch:', e);
  });
