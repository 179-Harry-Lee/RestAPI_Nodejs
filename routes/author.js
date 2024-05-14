const authorControllers = require("../controllers/authorControllers");

const router = require("express").Router();
//add author
router.post("/", authorControllers.addAuthor);

//Get all author

router.get("/", authorControllers.getAllAuthors);

//GET AN AUTHOR
router.get("/:id", authorControllers.getAnAuthor);

//UPDATE AuthOR
router.put("/:id", authorControllers.updateAuthor);

//DELETE AUTHOR
router.delete("/:id", authorControllers.deleteAuthor);

module.exports = router;
