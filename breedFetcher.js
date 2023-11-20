const request = require('request');

// console.log(process.argv);
request(`https://api.thecatapi.com/v1/breeds/search?name=${process.argv[2]}`, (error, response, body) => {
  // console.log(body)
  // console.log('error:', error);
  if (error) {
    return console.log('Error!');
  }
  const data = JSON.parse(body);
  // console.log(data);
  // console.log(typeof data);
  if (data[0] === undefined) {
    return console.log('We could not find this breed.');
  }
  console.log(data[0]['description']);
});
