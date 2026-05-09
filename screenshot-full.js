const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  // Set viewport to a standard desktop size
  await page.setViewport({ width: 1920, height: 1080 });

  const routes = [
    { name: 'home-full', path: '/', scroll: true },
    { name: 'nasa-projects-full', path: '/#/nasa-projects', scroll: true },
    { name: 'masters-projects-full', path: '/#/masters-projects', scroll: true },
  ];

  console.log('Taking full-page screenshots...');

  for (const route of routes) {
    const url = `http://localhost:3000${route.path}`;
    console.log(`Navigating to ${route.name}: ${url}`);

    await page.goto(url, { waitUntil: 'networkidle0' });

    // Wait a bit for any animations to complete
    await new Promise(resolve => setTimeout(resolve, 500));

    // Scroll down a bit to show more content
    if (route.scroll) {
      await page.evaluate(() => {
        window.scrollTo(0, 800);
      });
      await new Promise(resolve => setTimeout(resolve, 300));
    }

    const screenshotPath = path.join(__dirname, `screenshots/${route.name}.png`);
    await page.screenshot({ path: screenshotPath });

    console.log(`Screenshot saved: ${screenshotPath}`);
  }

  await browser.close();
  console.log('All full-page screenshots completed!');
})();
