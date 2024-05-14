const { Book, Author } = require("../model/model");

const bookControllers = {
  //Add a book
  addBook: async (req, res) => {
    try {
      const newBooks = new Book(req.body);
      const savedBook = await newBooks.save();
      if (req.body.author) {
        const author = Author.findById(req.body.author);
        await author.updateOne({ $push: { books: savedBook._id } });
      }
      res.status(200).json(savedBook);
    } catch (err) {
      res.status(500).send(err);
    }
  },

  getAllBooks: async (req, res) => {
    try {
      const allBooks = await Book.find();
      res.status(200).json(allBooks);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  getAnBook: async (req, res) => {
    try {
      const allAuthor = await Book.findById(req.params.id).populate("author");
      res.status(200).json(allAuthor);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  updateBook: async (req, res) => {
    try {
      const book = await Book.findById(req.params.id);
      await book.updateOne({ $set: req.body });
      res.status(200).json("Update complete");
    } catch (error) {
      res.status(500).json(error);
    }
  },

  //DELETE BOOK:
  deleteBook: async (req, res) => {
    try {
      await Author.updateMany(
        { books: req.params.id },
        { $pull: { books: req.params.id } } //Lay ra khoi array
      );
      await Book.findByIdAndDelete(req.params.id);
      res.status(200).json("Delete complete");
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = bookControllers;
