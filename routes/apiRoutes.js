var dbJSON = require("../db/db.json");

module.exports = function (app) {

    app.get("/api/notes", function (req, res) {
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