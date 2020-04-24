
var fs = require("fs")
module.exports = function (app) {

    app.get("/api/notes", function (req, res) {

        fs.readFile(__dirname + '/../db/db.json', function (err, data) {
            if (err) throw err;
            res.json(JSON.parse(data))
        })

    })

    app.post("/api/notes", function (req, res) {

        fs.readFile(__dirname + '/../db/db.json', 'utf-8', function (err, dbJSON) {
            console.log(dbJSON)
            if (err) throw err;
            dbJSON = JSON.parse(dbJSON)
            console.log(dbJSON)

            if (dbJSON.length === 0) {

                req.body.id = 1;
            } else {

                var lastNote = dbJSON[dbJSON.length - 1]
                console.log(lastNote)
                req.body.id = lastNote.id + 1;

            }
            dbJSON.push(req.body)

            fs.writeFile(__dirname + "/../db/db.json", JSON.stringify(dbJSON), function (err) {
                if (err) {
                    return console.log(err);
                }
                res.json(dbJSON);
            })
        })




        // dbJSON.push(req.body);
        // console.log(dbJSON);
        // fs.writeFile(__dirname + "/../db/db.json", JSON.stringify(dbJSON), function (err) {
        //     if (err) {
        //         return console.log(err);
        //     }
        //     res.json(dbJSON);
        // })
    })

    app.delete("/api/notes/:id", function (req, res) {

        fs.readFile(__dirname + '/../db/db.json', 'utf-8', function (err, dbJSON) {
            console.log(dbJSON)
            if (err) throw err;
            dbJSON = JSON.parse(dbJSON)

            console.log(req.params)
            var filteredArray = dbJSON.filter(function (note) {
                console.log(note)
                return note.id !== req.params.id
            })
            console.log(filteredArray)


            fs.writeFile(__dirname + "/../db/db.json", JSON.stringify(filteredArray), function (err) {
                if (err) {
                    return console.log(err);
                }
                res.json(filteredArray);
            })
        });
        console.log(id);
        // var noteID = (req.originalUrl.replace(/\?.*$/, “”)).split(“: ”)[1];

        // var result = res.post ()
        // res.post("notes: " + notes + "id: " + id);
        // for(var i = 0; i === id)

        // console.log(noteID);

        //use a for loop to grab ID to delete it and replace what needs to be there.
        //Loop through all posts.
        //Find ID that needs deleting
        //Remove the note with the given ID
        //Rewrite the notes in db.JSON
    })
}