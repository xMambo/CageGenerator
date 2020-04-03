// going off vbc 05 scraping

const cheerio = require('cheerio');
const axios = require('axios')


// Making a request via axios for reddit's "webdev" board. The page's HTML is passed as the callback's third argument
axios.get('https://www.imdb.com/filmosearch/?explore=title_type&role=nm0000115&ref_=filmo_vw_adv&mode=advanced&page=1&title_type=movie&sort=moviemeter,asc')
.then(function(response) {

    const $ = cheerio.load(response.data);

    let results = [];

    $("h3.lister-item-header").each(function(i, element) {
        const title = $(element).find('a').text();
        const link = $(element).find('a').attr('href');
        const img = $(element).children().find('a').attr('src');

        results.push({
            title:title,
            link: link,
            img: img
        });
    });

console.log(results);
});

