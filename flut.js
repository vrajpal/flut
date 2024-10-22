const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://finance.yahoo.com/quote/FLUT');
  
  // Wait for the element to load
  await page.waitForSelector('fin-streamer[data-symbol="FLUT"][data-field="regularMarketPrice"]');
  
  // Get the stock price
  const stockPrice = await page.$eval('fin-streamer[data-symbol="FLUT"][data-field="regularMarketPrice"]', el => el.textContent);
  console.log('Stock price:', stockPrice);

  await browser.close();
})();

