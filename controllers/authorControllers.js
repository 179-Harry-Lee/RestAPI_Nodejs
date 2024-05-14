const { Book, Author } = require("../model/model");

const authorControllers = {
  //add author
  addAuthor: async (req, res) => {
    try {
      const newAuthor = new Author(req.body);
      const savedAuthor = await newAuthor.save();
      res.status(200).json(savedAuthor);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  getAllAuthors: async (req, res) => {
    try {
      const authors = await Author.find();
      res.status(200).json(authors);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  getAnAuthor: async (req, res) => {
    try {
      const author = await Author.findById(req.params.id).populate("books");
      res.status(200).json(author);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  updateAuthor: async (req, res) => {
    try {
      const author = await Author.findById(req.params.id);
      await author.updateOne({ $set: req.body });
      res.status(200).json("Update complete");
    } catch (error) {
      res.status(500).json(error);
    }
  },

  deleteAuthor: async (req, res) => {
    try {
      await Book.updateMany({ author: req.params.id }, { author: null });
      await Author.findByIdAndDelete(req.params.id);
      res.status(200).json("Delete complete");
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
module.exports = authorControllers;
