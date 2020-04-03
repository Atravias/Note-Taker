let db = require('../db/db.json')

module.exports = function (app) {
    app.get("/api/notes", function (req, res) {
        res.json(db)
    })

    app.post("/api/notes", function (req, res) {
        var newNote = req.body;

        newNote.id = db.length + 1;

        db = [...db, newNote];
        res.json(db)
    })

    app.delete("/api/notes/:id", function (req, res) {
        var id = req.params.id;
        // console.log(id);

        db.forEach((item, index) => {
            if (item.id == id) {
                // console.log("the index is " + index)
                db.splice(index, 1);
                return db;
            };

        });


    })
}

