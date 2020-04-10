const path = require("path");
const fs = require("fs");

module.exports = function (app) {
  app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });


  // Default route to bring user to  the home page is erroneus address is submitted
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};
