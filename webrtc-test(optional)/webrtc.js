const puppeteer = require('puppeteer');
const fs = require("fs");

async function bot () {
    const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
    const page = await browser.newPage();

    page.on('error', (err) => {
        console.log('error: ', err)
    });
    page.on('pageerror', (err) => {
        console.log('pageerror: ', err)
    });
    page.on('console', msg => {
        for (let i = 0; i < msg.args.length; ++i)
        console.log(`${i}: ${msg.args[i]}`)
    });

    await page.goto('https://www.haxball.com/webrtcdiagnostics', {waitUntil: 'networkidle2'});

    await page.waitFor(2 * 1000);
    const pdf = await page.pdf({ format: 'A4' });
	//const html = await page.content();
	fs.writeFileSync("pdfResult.pdf", pdf);
	await browser.close();
};

bot();

console.log(`WebRTC test started !`)