var dbJSON = require("../db/db.json");
var fs = require("fs")
module.exports = function (app) {

    app.get("/api/notes", function (req, res) {
        res.json(dbJSON);
    })

    app.post("/api/notes", function (req, res) {

        req.body.id = dbJSON.length + 1;
        dbJSON.push(req.body);
        console.log(dbJSON);
        fs.writeFile(__dirname + "/../db/db.json", JSON.stringify(dbJSON), function (err) {
            if (err) {
                return console.log(err);
            }
            res.json(dbJSON);
        })
    })

    app.delete("/api/notes/:id", function (req, res) {
        console.log(req.params.id);
        //use a for loop to grab ID to delete it and replace what needs to be there.
        //Loop through all posts.
        //Find ID that needs deleting
        //Remove the note with the given ID
        //Rewrite the notes in db.JSON

        res.json(dbJSON);
    })
}

















// var path = require("path");
// var fs = require("fs");
// // var dbJSON = require("dbJSON");
// module.exports = function (app) {
//     app.get("/api/notes", (req, res) => {
//         return res.json(dbJSON);
//     });
//     // app.post("/api/notes", (req, res) => {
//     //     return res.json(dbJSON);
//     // });
//     // app.delete
// };