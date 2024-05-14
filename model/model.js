const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
  },
  books: {
    //tac gia thì có nhiều sách nên để array
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Book",
  },
});

const bookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  publishedDate: {
    type: String,
  },
  genres: {
    type: [String],
  },
  //_id:2323232
  author: {
    //Một cuốn sách chỉ có 1 tác giả
    type: mongoose.Schema.Types.ObjectId,
    ref: "Author",
  },
});

let Book = mongoose.model("Book", bookSchema);
let Author = mongoose.model("Author", authorSchema);

module.exports = { Book, Author };
