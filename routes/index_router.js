const Express = require("express");
const router = Express();

router.get("/", (req, res, next) => {
    res.render("index", {
        pageTitle: "Login Page"
    });
});



router.get("/register", (req, res, next) => {
    res.render("register", {
        pageTitle: "Register"
    })
})

module.exports = router;