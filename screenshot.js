const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  // Set viewport to a standard desktop size
  await page.setViewport({ width: 1920, height: 1080 });

  const routes = [
    { name: 'home', path: '/' },
    { name: 'nasa-projects', path: '/#/nasa-projects' },
    { name: 'masters-projects', path: '/#/masters-projects' },
    { name: 'publications', path: '/#/publications' },
    { name: 'resume', path: '/#/resume' }
  ];

  console.log('Taking screenshots of all pages...');

  for (const route of routes) {
    const url = `http://localhost:3000${route.path}`;
    console.log(`Navigating to ${route.name}: ${url}`);

    await page.goto(url, { waitUntil: 'networkidle0' });

    // Wait a bit for any animations to complete
    await new Promise(resolve => setTimeout(resolve, 500));

    const screenshotPath = path.join(__dirname, `screenshots/${route.name}.png`);
    await page.screenshot({ path: screenshotPath, fullPage: true });

    console.log(`Screenshot saved: ${screenshotPath}`);
  }

  await browser.close();
  console.log('All screenshots completed!');
})();
