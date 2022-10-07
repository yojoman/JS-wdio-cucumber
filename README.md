# JS-wdio-cucumber

Automated scenarios in JS for ProtonMail which include verifications of base use cases using Cucumber.

Technologies: Node.js + WebdriverIO + Cucumber + Chai

Running:
1. use "npm test" command.
2. use "npm test -- --cucumberOpts.tagExpression='@login'" - to run particular tag.
3. use "allure open ./reports/allure-report" - to open allure report.
