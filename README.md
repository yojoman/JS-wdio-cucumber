# JS-wdio-cucumber

Automated scenarios in JS for ProtonMail which include verifications of base use cases using Cucumber.

Technologies: Node.js + WebdriverIO + Cucumber + Chai

Installing:
1. npm init
2. npm init wdio
3. npm install chai
4. npm install @wdio/allure-reporter --save-dev
5. npm install -g allure-commandline --save-dev

Running:
1. use "npm test" command.
2. use "npm test -- --cucumberOpts.tagExpression='@login'" - to run particular tag.
3. use "allure generate ./reports/allure-results --clean -o ./reports/allure-report" - to generate allure report.
4. use "allure open ./reports/allure-report" - to open allure report.
