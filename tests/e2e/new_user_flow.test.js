const { chromium } = require('playwright')
const config = require('../../server/db/knexfile').development
const db = require('knex')(config)
const { serverUrl } = require('./index')
const path = require('path')

require('dotenv').config({ path: path.join(__dirname, '../../server/.env') })

jest.setTimeout(20000)

let browser
let page
beforeAll(async () => {
  browser = await chromium.launch({ headless: false, slowMo: 50 }) // 1000 })
  await db.migrate.latest({ directory: './server/db/migrations' })
})

beforeEach(async () => {
  const context = await browser.newContext({
    viewport: null
  })
  page = await context.newPage()
  await db.seed.run({ directory: './server/db/seeds' })
})

afterEach(async () => {
  await page.close()
})

afterAll(async () => {
  await browser.close()
  return db.destroy()
})

// Test goes here
test('User can create an argument', async () => {
  // going to localhost:3000
  await page.goto(serverUrl)

  // clicking on sign In
  await Promise.all([page.waitForNavigation(), page.click('text=Register')])

  // checking if the url changes to /signin
  expect(await page.url()).toContain(
    'https://argumentum-eda.au.auth0.com/'
  )

  const testEmail = process.env.E2E_TEST_AUTH0_EMAIL
  const testPassword = process.env.E2E_TEST_AUTH0_PASSWORD

  await page.fill('#username', testEmail)
  await page.fill('#password', testPassword)

  await Promise.all([
    page.waitForNavigation(),
    page.click('button[type=submit]', { force: true })
  ])

  await page.waitForSelector('text=Log out')
  expect(await page.content()).toMatch(/Log out/)

  expect(await page.content()).toMatch('Select an Avatar')

  await page.fill('#username', 'Test User')
  await page.click('#monkey-9', { force: true })

  await Promise.all([
    page.waitForNavigation(),
    page.click('#add-user', { force: true })
  ])

  expect(await page.$eval('main', (el) => el.innerText)).toMatch(
    /Select an Argument/
  )

  await page.click('text=Stupid', { force: true })
  await page.click('text=God', { force: true })
  await page.click('text=No', { force: true })
  await page.fill('#why-field', 'What has he done for me')
  await page.click('text=Submit', { force: true })

  await Promise.all([
    page.waitForNavigation(),
    page.click('text=Click to select your Opposition', { force: true })
  ])

  expect(await page.$eval('main', (el) => el.innerText)).toMatch(
    /xkeyboardWarrior/
  )

  await Promise.all([
    page.waitForNavigation(),
    page.click('text=ARGUE!', { force: true })
  ])

  expect(await page.$eval('main', (el) => el.innerText)).toMatch(
    /God/
  )
})
