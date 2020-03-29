const cheerio = require("cheerio");


const getGames = (html) => {
    const $ = cheerio.load(html);
    // let games = [];
    // $('div.col.search_name.ellipsis').each((i,e)=>{
    //     games.push($(e).html());
    // });

    // console.log(games);

    // console.log($("div#search_result_container").html());

    $("a.search_result_row").each((i,e)=>{
        console.log($(e).attr("href"));
    });
}

module.exports = {
    getGames
}