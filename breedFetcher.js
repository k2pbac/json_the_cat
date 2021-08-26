const request = require("request");



const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedName.slice(0,4)}`, (error, response, body) => {
    let newBody = JSON.parse(body, null, 2);
    if (newBody[0].breeds.length) {
      return callback(null, newBody[0].breeds[0].description);
    } else {
      return callback(error, null);
    }
  });
};


module.exports = {
  fetchBreedDescription
};