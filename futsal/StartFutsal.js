const puppeteer = require('puppeteer');

async function bot() {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();

  page.on('error', (err) => {
    console.log('error: ', err);
  });
  page.on('pageerror', (err) => {
    console.log('pageerror: ', err);
  });
  page.on('console', (msg) => {
    for (let i = 0; i < msg.args.length; ++i) { console.log(`${i}: ${msg.args[i]}`); }
  });

  await page.goto('https://www.haxball.com/headless', { waitUntil: 'networkidle2' });
  await page.addScriptTag({ path: 'haxbot-futsal.js' });

  // let frame = document.querySelector('iframe')
  // link = frame.contentWindow.document.querySelector('div[id="roomlink"] > p > a').href

  /* await page.waitFor(3000);
    await page.evaluate('[Page Evaluate] Waited for 3000 ms.');
    const frame = await page.frames()[0];
    await page.evaluate('[Page Evaluate] Frame data', frame); */

  // console.log(link)
}

bot();

console.log('HaxRO Futsal 3x3 started ! ');
