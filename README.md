#xxx has saved more than a million lives with its three-point seat belt and we are on a mission
#now to save a million more lives, starting with this campaign. You are the test lead for the campaign
#team and you need to setup a set of automated test suite using webdriverio.
# ==================

# Test automation Blaise's assignment 

## Requirements ##
1. Setup the solution with its Dockerized image :`Docker compose with selenium-hub, selenium-node/chrome, selenium-node/firefox`
2. Parallel execution of tests :`Chrome:3 instances, Firefox:1 instance`
3. Reporting of the results  :`Allure and Multiple cucumber Json reporter`
4. Documentation

## Addtional ( Bonus )

1. Use Kubernetes solution ( parallel distributed testing)
2. Visual regression testing `(wdio-image-comparision)`

## Features

1.Test will run, parallely based on node instances aavailable with `selenium-hub` `chrome/firefox` **nodes**
2. BDD testing with `Cucumber`
3. Reporting with `Allure`
4. Reporting with `multiple-cucumber-json-reporter`
5. Given, Scenario, Step definitions and helper files written in `typescript`
6.Docker compose is used to start the `selenium-hub`

## Required version 

1. Need **node-js** and **java** `(allure-reporter)`
2. `Node.js` - 10 or higher
3. `Java` - 8 or higher
4.  vs code 

## Starting application testing

1. Install **Node dependencies**:

```sh
npm install
```

2. Install **docker** and run `selenium:hub`:

```sh
npm run selenium
```

3. Running tests:

```sh
npm run test
```

To stop docker containers:

```sh
npm run selenium:stop
```
## Report generation

1. Allure report is automatically generated to open the reports

```sh
npm run report:allure
```

2. Multiple cucumber json reporter will open automatically, but to open manually.

```sh
npm run report
```

## Parallel Testing

- WebdriverIO can run parallel test/features in case of multiple nodes availability with selenium hub.
  so We have configured `chrome=3` and `firefox=1` instance/node.
- When run `docker-compose up -d --scale chrome=3` or `npm run selenium`, we are spinning three chrome instances.
- Webdriver IO will run all test in **parallel** in chrome due to available nodes
- Webdriver IO will run sequentially in Firefox because of single instance/node.
- We can use **kubernetes to provision the nodes** in selenium-hub based on demand ( Work in Progess)

## M.Blaise -Laco2020@gmail.com

