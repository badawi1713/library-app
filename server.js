const Express = require("express");
const app = Express();
const bodyParser = require("body-parser");
const path = require("path");
const PORT = process.env.PORT || 8080;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({
    extended: false
}));

//static file for express view engine like css, js, jquery
app.use(Express.static(path.join(__dirname, 'public')));
app.use(Express.static(path.join(__dirname, 'storages')));

// Registered routes
const adminRoutes = require("./routes/admin_router");
const indexRoutes = require("./routes/index_routes");

// Registered middlewares

// admin routes
app.use("/admin/", adminRoutes);

// index routes
app.use("/", indexRoutes);

app.listen(PORT, () => {
    console.log("Listen to http://localhost:" + PORT);
});