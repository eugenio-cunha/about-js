'use strict';

const { Chromium } = require('../lib');

module.exports = async () => {
  const page = await Chromium.newPage();

  await page.goto('https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference', {
    waitUntil: 'domcontentloaded'
  });

  await page.waitForSelector('a', { timeout: 3000 });
  const links = await page.$$eval('a', e => e.map(n => n.getAttribute('href')));
  const urls = links.filter(e => !['http', 'login'].includes(e.toLowerCase()));

  page.close();
  return urls;
};