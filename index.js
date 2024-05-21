const chromium = require("@sparticuz/chromium");
const { chromium: playwright } = require("playwright-core");
const app = require("express")();

app.get("/", async (_, res) => {
  const browser = await playwright.launch({
    args: chromium.args,
    executablePath: await chromium.executablePath(),
    headless: chromium.headless,
  });
  const page = await browser.newPage();
  await page.goto("https://example.com");
  const title = await page.title();
  await browser.close();

  res.send(title);
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

module.exports = app;
