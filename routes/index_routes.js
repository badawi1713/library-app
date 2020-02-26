const Express = require("express");
const router = Express();

router.get("/", (req, res, next) => {
    res.render("index", {
        pageTitle: "Login Page"
    });
});

module.exports = router;