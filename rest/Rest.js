const fetch = require("node-fetch");

class Rest {
    constructor() {

        this.userAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36";

    }

    GET = (url) => {
        try {
            return new Promise((resolve, reject) => {
                fetch(url, { "headers": { "user-agent": this.userAgent } }).then(response => {
                    resolve(response.text());
                });
            });

        } catch (error) {
            console.log(error);
        }
    }

    POST = () => {

    }

    PATCH = () => {

    }
}

module.exports = {
    Rest
}