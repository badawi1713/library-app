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
    const submitAt = "February, 29th 2020";

    const Book = new Book_model({
        imageURL: imageURL,
        title: bookTitle,
        description: description,
        date: submitAt
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
    const bookID = req.params.bookID;
    Book_model.findById(bookID).then(book => {
        res.render("admin/book_details", {
            pageTitle: "Detail",
            book: book
        });
    }).catch(error => {
        console.log(error);
    })

}

exports.postEditBookData = (req, res, next) => {
    const bookID = req.body.id;
    const imageURL = req.body.imageURL;
    const description = req.body.description;
    const title = req.body.bookTitle;

    Book_model.findById(bookID).then(edit => {
        edit.imageURL = imageURL;
        edit.title = title;
        edit.description = description;

        return edit.save();
    }).then(result => {
        console.log(`Book with ID: ${bookID} has been updated!`);
        res.redirect('/admin/book-details/' + bookID);
    }).catch(error => {
        console.log(error);
    })

}

exports.postDeleteBookData = (req, res, next) => {
    const bookID = req.body.id;
    Book_model.findByIdAndRemove(bookID).then(() => {
        console.log(`Book with ID: ${bookID} has been deleted!`);
        res.redirect('/admin/');
    }).catch(error => {
        console.log(error);
    })
}