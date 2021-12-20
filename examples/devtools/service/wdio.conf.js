const path = require('path')

exports.config = {
    specs: [path.join(__dirname, '*.test.js')],
    suites: {
        pageWeight: ['./pageWeight.e2e.js'],
        scriptBlocking: ['./scriptBlocking.e2e.js']
    },
    logLevel: 'trace',
    baseUrl: 'https://www.volvocars.com/images/v/-/media/project/contentplatform/data/media/my22/car-images/xc40-recharge-my22-responsive.jpg',
    framework: 'mocha',
    outputDir: path.join(__dirname, 'logs'),
    reporters: ['spec'],
    services: ['devtools'],
    capabilities: [{
        acceptInsecureCerts: true,
        browserName: 'chrome'
    }],
    mochaOpts: {
        ui: 'bdd',
        timeout: 30000
    }
}
