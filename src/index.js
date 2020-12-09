const puppeteer = require('puppeteer')
const Instagram = require('./instagram/Instagram')

const instagram = new Instagram('https://www.instagram.com/p/CIjYL1MJThP/')

async function execute() {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(instagram.postLink)

  // logic and actions stuff here

  await browser.close()
}

execute()