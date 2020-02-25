const Express = require("express");
const router = Express();

router.get("/", (req, res, next) => {
    res.render("admin/index", {
        pageTitle: "Homepage"
    });
});

router.get("/book-details", (req, res, next) => {
    res.render("admin/book_details", {
        pageTitle: "Detail"
    });
});


module.exports = router;