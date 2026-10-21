# QA-Giudizi-Martinez-Halo-Automation-Framework

QA Automation Framework for the SauceDemo application.

## Prerequisites

Make sure the following tools are installed:

- **Node.js:** v22.14.0 (LTS recommended)
- **npm:** v10.9.2
- **Git:** To clone the repository
- **Visual Studio Code:** Recommended code editor
- **Chromium:** Installed through Playwright in the setup steps below

Verify your Node.js and npm versions:

```bash
node --version
npm --version
```

## Getting Started

Clone the repository and navigate to the project directory:

```bash
git clone https://github.com/agustinido-commits/QA-Giudizi-Martinez-Halo-Automation-Framework.git
cd QA-Giudizi-Martinez-Halo-Automation-Framework
```

Install dependencies and the Playwright Chromium browser:

```bash
npm ci
npx playwright install chromium
```

Run the automated tests:

```bash
npm test
```

Generate the HTML test report:

```bash
npm run report
```

Open the generated report:

```powershell
Invoke-Item .\reports\html\index.html
```

## Tech Stack

- TypeScript
- Playwright
- Cucumber / Gherkin
- Page Object Model (POM)
- HTML test reporting
