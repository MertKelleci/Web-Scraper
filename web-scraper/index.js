const express = require("express");
const app = express();
const url =
  "https://www.hepsiburada.com/laptop-notebook-dizustu-bilgisayarlar-c-98";

const axios = require("axios");
const cheerio = require("cheerio");
axios(url)
  .then((response) => {
    const arr = [];
    const html = response.data;
    const $ = cheerio.load(html);
    $(".productListContent-zAP0Y5msy8OHn5z7T_K_", html).each(function () {
      arr.push({
        itemName: $(this).find($("h3", this)).text(),
        itemPrice: $(this)
          .find($('[data-test-id="price-current-price"]', this))
          .text(),
      });
    });

    console.log(arr);
  })
  .catch((err) => {
    console.log("There has been an error:");
    console.log(err);
  });

app.listen(8000, () => {
  console.log("Server running on port 8000");
});
