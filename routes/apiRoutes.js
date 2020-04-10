const path = require("path");
const fs = require("fs");

module.exports = function (app) {
  
    // Get all saved notes
    app.get("/api/notes", async (req, res) =>{
        const data = await fs.readFileSync(
            path.join(__dirname, "../db/db.json"),
            "utf-8"
            );
        const parseData = JSON.parse(data);
        return res.json(parseData);
    });
  
    // Post a new note
    app.post("/api/notes", async (req, res) => {
    const data = await fs.readFileSync(
      path.join(__dirname, "../db/db.json"),
      "utf-8"
    );
    console.log(req.body);
    const notes = await JSON.parse(data);
    
    await notes.push(req.body);
    await notes.forEach((elem, ind) => {
      elem.id = ind + 1;
    });
    const notesString = await JSON.stringify(notes);
    await fs.writeFileSync(
      path.join(__dirname, "../db/db.json"),
      notesString,
      (err) => {
        if (err) throw err;
      }
    );
    res.json(notes);
  });


  // Delete a note
  app.delete("/api/notes/:id", async (req, res) => {
    const { id } = req.params;
    const data = await fs.readFileSync(
      path.join(__dirname, "../db/db.json"),
      "utf-8"
    );
    const notes = await JSON.parse(data);

    await notes.forEach((elem, ind, obj) => {
      if (elem.id === parseInt(id)) {
        obj.splice(ind, 1);
      }
    });
    const notesString = await JSON.stringify(notes);
    await fs.writeFileSync(
      path.join(__dirname, "../db/db.json"),
      notesString,
      (err) => {
        if (err) throw err;
      }
    );
    res.json(notes);
  });
};
