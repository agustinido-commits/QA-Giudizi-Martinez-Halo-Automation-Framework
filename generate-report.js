
(async () => {
  const module = await import("multiple-cucumber-html-reporter");

  const reporter =
    module.default?.default ??
    module.default ??
    module;

  if (typeof reporter.generate !== "function") {
    console.error("No se encontró la función generate.");
    console.error("Exportaciones disponibles:", Object.keys(module));
    console.error("Exportaciones default:", Object.keys(module.default ?? {}));
    process.exitCode = 1;
    return;
  }

  reporter.generate({
    jsonDir: "./reports",
    reportPath: "./reports/html",
    pageTitle: "QA Automation - Test Execution Report",
    reportName: "SauceDemo Test Results",
    displayDuration: true,
    metadata: {
      browser: {
        name: "chromium",
        version: "installed"
      },
      platform: {
        name: "Windows"
      }
    },
  });
})().catch((error) => {
  console.error("Error generating HTML report:", error);
  process.exitCode = 1;
});
