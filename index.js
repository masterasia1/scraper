const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');
const port = 8000;

const app = express();

axios('http://wwww.theguardian.com')
.then(res => {
    const html = res.data
    const $ = cheerio.load(html)
    const articles = []
    $('.fc-item__title', html).each(function () {
     const title =  $(this).text('')
      const url =  $(this).find('a').attr('href')
      articles.push({
        title,
        url
    })
    })
    console.log(articles)
}) .catch(err => console.error(err))

app.listen(port, () => console.log('listening on port ' + port))