describe('webdriver.io page', () => {
    it('should have the right title', () => {
        browser.url('https://www.volvocars.com/intl/v/car-safety/a-million-more')
        expect(browser).toHaveTitle('WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO')
    })
})
