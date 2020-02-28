const Express = require("express");
const router = Express();

const adminController = require('../controllers/admin_controller');

router.get("/", adminController.getIndexPage);

router.post("/add-book", adminController.postBookData);

router.get("/book-details", adminController.getBooksDetail);


module.exports = router;