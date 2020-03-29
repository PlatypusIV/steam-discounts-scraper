const rest = require('./rest/Rest');
const scraper = require("./scraping/scraper");
const url = "https://store.steampowered.com/search/?filter=topsellers&specials=1";


const Rest = new rest.Rest();


Rest.GET(url).then(data=>{
    // console.log(data);
    scraper.getGames(data);

});
