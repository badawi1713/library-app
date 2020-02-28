const Express = require("express");
const app = Express();
const bodyParser = require("body-parser");
const path = require("path");
const PORT = process.env.PORT || 8080;
const mongoose = require('mongoose');

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({
    extended: false
}));

// mongo database
const MONGODB_URI = 'mongodb://localhost:27017/library-app';

//static file for express view engine like css, js, jquery, ect
app.use(Express.static(path.join(__dirname, '/public')));
app.use(Express.static(path.join(__dirname, '/storages')));

// Registered routes
const adminRouter = require("./routes/admin_router");
const indexRouter = require("./routes/index_router");

// Registered middlewares

// admin routes
app.use("/admin/", adminRouter);

// index routes
app.use("/", indexRouter);

// Connect to server and database
mongoose.connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(result => {
        app.listen(PORT, () => {
            console.log("Listen to http://localhost:" + PORT);
        });
    })
    .catch(err => {
        console.log(err);
    });