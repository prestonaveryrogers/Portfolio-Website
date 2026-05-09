const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  // Set viewport to a standard desktop size
  await page.setViewport({ width: 1920, height: 1080 });

  const url = 'http://localhost:3000/';
  console.log(`Navigating to About Me: ${url}`);

  await page.goto(url, { waitUntil: 'networkidle0' });

  // Wait a bit for any animations to complete
  await new Promise(resolve => setTimeout(resolve, 500));

  // Scroll down to education section
  await page.evaluate(() => {
    const educationSection = document.querySelector('.education-section');
    if (educationSection) {
      educationSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
  await new Promise(resolve => setTimeout(resolve, 800));

  const screenshotPath = path.join(__dirname, 'screenshots/aboutme-education.png');
  await page.screenshot({ path: screenshotPath });

  console.log(`Screenshot saved: ${screenshotPath}`);

  // Scroll to experience section
  await page.evaluate(() => {
    const experienceSection = document.querySelector('.experience-section');
    if (experienceSection) {
      experienceSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
  await new Promise(resolve => setTimeout(resolve, 800));

  const screenshotPath2 = path.join(__dirname, 'screenshots/aboutme-experience.png');
  await page.screenshot({ path: screenshotPath2 });

  console.log(`Screenshot saved: ${screenshotPath2}`);

  await browser.close();
  console.log('About Me screenshots completed!');
})();
