const puppeteer = require("puppeteer");

async function getFutbin() {
  const url = "https://www.futbin.com/20/player/48200/riyad-mahrez";

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: "networkidle2" });

  const data = await page.evaluate(() => {
    let price = document.querySelector('span[id="ps-lowest-1"]').innerText;
    let stats = document.querySelector('div[class="card-body"]').innerText;

    return { price, stats };
  });

  const index = data.stats.indexOf("Physical");

  const stats = data.stats.slice(0, index);
  const price = data.price;

  const statArray = stats.split("\n");

  var playerObject = {};

  for (let i = 0; i < statArray.length; i++) {
    if (statArray[i] != "") {
      if (!Number(statArray[i])) {
        playerObject[statArray[i]] = Number(statArray[i + 1]);
      }
    }
  }

  playerObject["Price"] = price;
  playerObject["Last Price Updated"] = new Date();

  console.log(playerObject);

  return await browser.close();
}

getFutbin();
