import puppeteer from "puppeteer";

async function startCrawling() {
  const browser = await puppeteer.launch({ headless: false }); // 브라우저를 우리 눈에 안보이게 하는 옵션(true), 보이게 하려면(false)
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 720 });
  await page.goto("https://www.goodchoice.kr/product/search/2");
  await page.waitForTimeout(1000);

  const stage = await page.$eval(
    "#poduct_list_area > li:nth-child(2) > a > div > div.name > div > span",
    (el) => {
      return el.textContent;
    }
  );

  const location = await page.$eval(
    "#poduct_list_area > li:nth-child(2) > a > div > div.name > p:nth-child(4)",
    (el) => {
      return el.textContent;
    }
  );

  const price = await page.$eval(
    "#poduct_list_area > li:nth-child(2) > a > div > div.price > p > b",
    (el) => {
      return el.textContent;
    }
  );
  console.log(stage, location, price);
}

startCrawling();
