//first attempt following cj but the search url format is different

const fetch = require('node-fetch');

// this is the url for Nicolas Cage. if i wanted to change the actor i'd have to find a way to cut that into the url.
const url = 'https://www.imdb.com/name/nm0000115/?ref_=nv_sr_srsg_4';

function searchMovies() {
    fetch(url)
    .then(response => response.text())
}

searchMovies()
.then(body => {
    console.log(body);
});