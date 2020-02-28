const Book_model = require("../models/Book");


exports.getIndexPage = (req, res, next) => {
    Book_model.find({

    }).then(book => {
        res.render("admin/home", {
            pageTitle: "Homepage",
            book: book,
        });
    }).catch(error => {
        console.log(error);
    });
};

exports.postBookData = (req, res, next) => {
    const imageURL = req.body.imageURL;
    const bookTitle = req.body.bookTitle;
    const description = req.body.description;
    const submitAt = "28 Februari 2020";

    const Book = new Book_model({
        imageURL: imageURL,
        title: bookTitle,
        description: description,
        submitAt: submitAt
    });

    Book.save().then(result => {
        console.log(result);
        let id = result._id;
        console.log(`ID: ${id}`);
        console.log(`Book's data is addedd succesfully!`);
        res.redirect('/admin/')
    }).catch(error => {
        console.log(error);
    });
};

exports.getBooksDetail = (req, res, next) => {
    res.render("admin/book_details", {
        pageTitle: "Detail"
    });
}