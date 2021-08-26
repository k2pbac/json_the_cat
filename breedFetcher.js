const request = require("request");


request(`https://api.thecatapi.com/v1/images/search?breed_ids=${process.argv.slice(2)[0].slice(0,4)}`, (error, response, body) => {
  let newBody = JSON.parse(body, null, 2);
  if (typeof newBody !== 'undefined' && newBody.length) {
    console.log(newBody[0]);
  } else {
    console.log("Sorry we could not find that breed of cat!");
  }
});