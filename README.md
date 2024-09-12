#qa_task

## Project Description
This is an automated testing framework designed to test the functionality of the EasyDMARC SPF Generator page. 
It uses Cypress to automate end-to-end tests, ensuring that the key user flows work as expected across different browsers and platforms.


## Technologies Used
	- Cypress - (https://www.cypress.io/)
	- Node.js
	- Mocha (as test framework)
	- Chai (for assertions)


## Prerequisites
	- Node.js (version 14 or higher)
	- npm (version 6 or higher)
	- Cypress (installed globally or locally in the project)


## Installation and Setup
	1. Clone the repository:
	   git clone https://github.com/martirossedrakyan/qa_task

	2. Navigate to the project directory:
	   cd your-repo

	3. Install dependencies:
	   npm install

	4. Run Cypress Test Runner:
	   npx cypress open

	5. For headless mode, use:
	   npx cypress run

## Project Structure
	- `cypress/e2e` - Test cases.
	- `cypress/factory` - Helper class to get web page test data.
	- `cypress/pages` - Test Data about the web page
	- `cypress/support` - Custom commands and utility functions.
	- `cypress.json` - Cypress configuration file.
	- `package.json` - Project dependencies and scripts.


## Support
If you have any questions or need further assistance, please contact:
- Martiros Sedrakyan - m.sedrakyan@gmail.com