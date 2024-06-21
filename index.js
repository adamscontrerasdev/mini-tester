const puppeteer = require('puppeteer');

async function runTest() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  try {
    await page.goto('https://tokinprivacy.io');
    console.log('Visited https://tokinprivacy.io');
  } catch (error) {
    console.error(error);
  }
  await browser.close();
}

async function runTestsInParallel(num) {
  let promises = [];
  for (let i = 0; i < num; i++) {
    promises.push(runTest());
  }
  await Promise.all(promises);
}

runTestsInParallel(100).then(() => {
  console.log("All tests are done.");
});
