const path = require("path");
const express = require("express");
const app = express();

module.exports = function (app) {
    
    
    app.get("/notes", (req, res) =>{
        res.sendFile(path.join(__dirname, "../public/notes.html"));
        
    });

  app.get("/", function (req, res) {
    console.log("got here");
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};
