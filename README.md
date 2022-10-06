# MoonPay QA Challenge

This repo contains the source code and the relevant documentation for the MoonPay Take Home QA Challenge. 

In order to execute the tests, please clone this repo and then run the following commands *(the **.drone.yml** file also lists the commands to run)*:

    cp .env.sample .env
    npm install
    npx playwright install-deps
    npx codeceptjs run

***Node.js is a requirement for this project to run.***

# Test Approach/Tooling
The tests were written in TypeScript/JavaScript utilising a testing framework called [CodeceptJS](https://codecept.io/) with Playwright being used to drive the browser. I used CodeceptJS for this project due to having a liking for the way tests are structured and the flexibility that CodeceptJS provides for having different test runners and assertion libraries. Also it wasn't clear if brower support was required in the project brief and Cypress WebKit support still being experimental.

I used [Drone](https://www.drone.io/) as the CI platform mainly just to ensure that the tests run successfully on both my local development machine and on a local server. The .drone.yml file shows the basic pipeline which was used during this task.

There is a basic visual test included in the branch feature/visual-tests. This utilises [Resemble.js](https://github.com/rsmbl/Resemble.js) in order to perform some visual diffs. If the npm install command fails on this repo, please install GTK 2 and libjpeg-turbo which should fix this. This was left on a branch and removed from main due to the dependencies of GTK 2 and libjpeg-turbo being installed.

## Approach

Started off with a manual run through of the application under test in order to identify suitable test scenarios to automate. 
Once the suitable scenarios were identified, tool selection was determined (as outlined above).
Page Objects appeared to be useful in this regard due to the high number of reuse of fields in order to exercise the test scenarios (see below).


# Test Scenarios
Assuming that there is a decent level of test coverage at the unit, integration and API test levels then I feel that the following scenarios should be tested at the UI level (*at a bare minimum*):

 1. User can update the cart
 2. User can successfully checkout with a valid payment card
 3. User can authenticate their payment via 3D Secure
 4. Ensure declined cards results in an appropriate message to the user
 5. Failed authentications show an appropriate message to the user
 6. [Visual Test] Check the layout of the page

