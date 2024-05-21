const app = require("express")();

app.get("/", async (_, res) => {
  try {
    res.send("xxxx");
  } catch (error) {
    res.send("error");
  }
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

module.exports = app;
