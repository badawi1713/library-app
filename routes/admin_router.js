const Express = require("express");
const router = Express();

const adminController = require('../controllers/admin_controller');

router.get("/", adminController.getIndexPage);

router.post("/add-book", adminController.postBookData);

router.get("/book-details/:bookID", adminController.getBooksDetail);

router.post("/edit-book", adminController.postEditBookData)

router.post("/delete-book", adminController.postDeleteBookData);

module.exports = router;