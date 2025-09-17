const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function generateFavicons() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Read the SVG file
  const svgPath = path.join(__dirname, '../public/favicon.svg');
  const svgContent = fs.readFileSync(svgPath, 'utf8');
  
  // Create HTML with the SVG
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { margin: 0; padding: 0; background: transparent; }
        svg { display: block; }
      </style>
    </head>
    <body>
      ${svgContent}
    </body>
    </html>
  `;
  
  await page.setContent(html);
  
  // Generate 192x192 PNG
  await page.setViewport({ width: 192, height: 192 });
  const png192 = await page.screenshot({
    path: path.join(__dirname, '../public/favicon-192.png'),
    type: 'png',
    omitBackground: false
  });
  
  // Generate 512x512 PNG
  await page.setViewport({ width: 512, height: 512 });
  const png512 = await page.screenshot({
    path: path.join(__dirname, '../public/favicon-512.png'),
    type: 'png',
    omitBackground: false
  });
  
  await browser.close();
  console.log('✅ Favicons generated successfully!');
}

generateFavicons().catch(console.error);