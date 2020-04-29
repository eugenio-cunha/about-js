'use strict';

const { Chromium } = require('../lib');

module.exports = async path => {
  const page = await Chromium.newPage();

  await page.goto(`https://developer.mozilla.org${path}`, { waitUntil: 'domcontentloaded' });

  const editor = await page.$('#editor');

  console.log('----------------------', editor);
  
  let code = '';
  if (editor) {
    code = 'toot';
  }

  page.close();
  return code;
};