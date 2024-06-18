const express = require("express");
const app = express();
const loaders = require("./loaders");

// Load all the loaders
loaders(app);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`);
});
