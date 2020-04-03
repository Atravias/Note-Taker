var express = require("express");
var app = express();
var PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'))

var apiRoutes = require('./routes/apiRoute');
apiRoutes(app);

var htmlRoutes = require('./routes/htmlRoutes');
htmlRoutes(app)

app.listen(PORT, function () {
    console.log("Listening on PORT:", PORT)
});


// a.forEach((item, index) => {
//     if (item.id === 4) {
//         console.log(index)
//     } else {
//         console.log("nope")
//     };
// });