const chromium = require("@sparticuz/chromium");
const playwright = require("playwright-core");
const app = require("express")();

app.get("/", async (_, res) => {
  try {
    const browser = await playwright.chromium.launch({
      executablePath,
      headless: true, // use this instead of using chromium.headless because it uses the new `headless: "new"` which will throw because playwright expects `headless: boolean`
      args: chromium.args,
    });

    const page = await browser.newPage();
    await page.goto("https://example.com");
    const title = await page.title();
    await browser.close();

    res.send(title);
  } catch (error) {
    res.send(error.message);
  }
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

module.exports = app;
