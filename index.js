const puppeteer = require("puppeteer");

async function getFutbin(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: "networkidle2" });

  const data = await page.evaluate(() => {
    let price = document.querySelector('span[id="ps-lowest-1"]').innerText;
    let stats = document.querySelector('div[class="card-body"]').innerText;
    let infoHeading = [
      ...document.querySelectorAll(
        'div[id="info_content"] > table > tbody > tr > th'
      ),
    ];

    let infoValues = [
      ...document.querySelectorAll(
        'div[id="info_content"] > table > tbody > tr > td'
      ),
    ];

    const infoHeadingArray = infoHeading.map((element) => element.innerText);
    const infoValuesArray = infoValues.map((element) => element.innerText);

    return { price, stats, infoHeadingArray, infoValuesArray };
  });

  const index = data.stats.indexOf("Physical");

  const stats = data.stats.slice(0, index);
  const statArray = stats.split("\n");

  var playerObject = {
    info: {},
    stats: {},
  };

  for (let i = 0; i < statArray.length; i++) {
    if (statArray[i] != "") {
      if (!Number(statArray[i])) {
        playerObject.stats[statArray[i]] = Number(statArray[i + 1]);
      }
    }
  }

  for (let i = 0; i < data.infoHeadingArray.length; i++) {
    if (data.infoHeadingArray[i] !== "") {
      playerObject.info[data.infoHeadingArray[i]] = data.infoValuesArray[i];
    }
  }

  playerObject["Price"] = data.price;
  playerObject["Last Updated"] = new Date();

  const playerNameAndtype = `${playerObject.info.Name} - ${playerObject.info.Revision}`;

  var player = [];

  player[playerNameAndtype] = playerObject;

  console.log(player);

  return await browser.close();
}

getFutbin("https://www.futbin.com/20/player/48200/riyad-mahrez");
