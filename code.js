'use strict';

const yelp = require('yelp-fusion');

// Place holder for Yelp Fusion's API Key. Grab them
// from https://www.yelp.com/developers/v3/manage_app
const apiKey = '_fRGx0tK92V-Bzxhhtm-hepIOprXRHT97KK0XOkVHgTGiLDtZy4RYweKOGZmlNqD3OJ_9HpESDi9sJ7EiHoGSZKySR0ITPwUCpT8e3yojKJEYTjROtl2VzZg3OdZXnYx';      

const searchRequest = {
  term:'Four Barrel Coffee',
  location: 'san francisco, ca'
};

const client = yelp.client(apiKey);

client.search(searchRequest).then(response => {
  const firstResult = response.jsonBody.businesses[0];
  const prettyJson = JSON.stringify(firstResult, null, 4);
  console.log(prettyJson);
}).catch(e => {
  console.log(e);
});-'


