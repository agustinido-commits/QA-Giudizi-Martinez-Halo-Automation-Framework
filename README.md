# QA-Giudizi-Martinez-Halo-Automation-Framework
QA Automation Framework to Halo on saucedemo app

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

```bash
Invoke-Item .\reports\html\index.html
```
