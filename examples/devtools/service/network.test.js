describe('with the devtools service', () => {
    it('I should be able to listen to all network calls', () => {
        browser.cdp('Network', 'enable')
        browser.on('Network.responseReceived', (params) => {
            console.log(`Loaded ${params.response.url}`)
        })
        browser.url('https://www.volvocars.com/intl/v/car-safety/a-million-more')
    })
})
