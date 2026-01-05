const puppeteer = require('puppeteer');
const fs = require('fs');

(async ()=>{
  const url = process.env.URL || 'http://localhost:3000';
  const browser = await puppeteer.launch({ args: ['--no-sandbox','--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  page.setViewport({ width: 1280, height: 900 });

  const logs = [];
  page.on('console', msg => logs.push(msg.text()));

  console.log('Opening', url);
  await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });

  // take screenshot and save HTML
  await page.screenshot({ path: 'preview.png', fullPage: true });
  const html = await page.content();
  fs.writeFileSync('preview.html', html, 'utf8');
  fs.writeFileSync('preview_console.log', logs.join('\n'), 'utf8');

  await browser.close();
  console.log('Saved: preview.png, preview.html, preview_console.log');
})();
