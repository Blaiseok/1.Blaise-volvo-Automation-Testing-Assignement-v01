/**
 * in order to run this file make sure you have `webdriverio`
 * installed using NPM before running it:
 *
 *   $ npm install webdriverio
 *
 */
const { remote } = require('webdriverio')

let browser;

(async () => {
    browser = await remote({
        capabilities: {
            browserName: 'chrome'
        }
    })

    await browser.url('https://www.volvocars.com/intl/v/car-safety/a-million-more')

    await browser.call(async () => {
        const puppeteerBrowser = await browser.getPuppeteer()
        const page = (await puppeteerBrowser.pages())[0]
        await page.setRequestInterception(true)
        page.on('request', interceptedRequest => {
            if (interceptedRequest.url().endsWith('webdriverio.png')) {
                return interceptedRequest.continue({
                    url: 'https://www.volvocars.com/images/v/-/media/project/contentplatform/data/media/campaigns/linda_molly_henriksson-1080x1350.jpg?h=938&iar=0&w=750'
                })
            }

            interceptedRequest.continue()
        })
    })

    // continue with WebDriver commands
    await browser.refresh()
    await browser.pause(2000)

    await browser.deleteSession()
})().catch(async (e) => {
    console.error(e)
    await browser.deleteSession()
})
