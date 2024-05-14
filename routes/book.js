const bookControllers = require("../controllers/bookControllers");

const router = require("express").Router();

//Add a book:
router.post("/", bookControllers.addBook);

//Get all books:
router.get("/", bookControllers.getAllBooks);

// GET AN BOOK
router.get("/:id", bookControllers.getAnBook);

// UPDATE BOOK
router.put("/:id", bookControllers.updateBook);

//DELETE BOOK
router.delete("/:id", bookControllers.deleteBook);

module.exports = router;
