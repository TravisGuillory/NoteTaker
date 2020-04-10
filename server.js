// --Add reference to express to interact with html and route to and from server

const express = require("express");
const path = require('path');

var app = express();



// --Create an express server. 

// -- Middleware  parsing 


app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


/*
// --Create routes 
// --Route to the homepage
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

//-- Rout to get the current notes. 
app.get("/notes", (req, res) =>{
    res.sendFile(path.join(__dirname, "/public/notes.html"));
    
});



 app.get("/api/notes", async (req, res) =>{
    const data = await fs.readFileSync(path.join(__dirname, "db/db.json"), "utf-8");
    const parseData = await JSON.parse(data);
    console.log(parseData);
    return res.json(parseData);
});

app.get("./notes/:id", (req, res) => {
    res.json(savedNotes[Number(req.params.id)]);
});

app.post("/api/notes",  async (req, res) =>{
        const data = await fs.readFileSync(path.join(__dirname, "db/db.json"), "utf-8");
        console.log(req.body);
        const notes = await JSON.parse(data);
        console.log(notes);
        await notes.push(req.body);
        await notes.forEach((elem, ind) =>{
            elem.id = (ind + 1)
        });
        const notesString = await JSON.stringify(notes);
        await fs.writeFileSync(path.join(__dirname, "db/db.json"), notesString, (err) =>{
            if (err) throw err 
        });
        res.json(notes);
});

 app.delete("/api/notes/:id", async (req, res) =>{
    const {id} = req.params
    const data = await fs.readFileSync(path.join(__dirname, "db/db.json"), "utf-8");
    const notes = await JSON.parse(data);

    await notes.forEach((elem, ind, obj) => {
        if (elem.id === parseInt(id)) {
            obj.splice(ind, 1);
        }
    })
    const notesString = await JSON.stringify(notes); 
    await fs.writeFileSync(path.join(__dirname, "db/db.json"), notesString, (err) =>{
        if  (err) throw err;
    });
    res.json(notes);
}); 
*/
const PORT = process.env.PORT || 8080;
// --Start server at specified port.
app.listen(PORT, function(){
    console.log("Server is listening at " + PORT);
});

