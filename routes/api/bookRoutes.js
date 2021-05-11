const router = require("express").Router();
const db = require("../../models");

router.get("/", async (req, res) => {
  try {
    const userData = await db.User.findById({
      _id: req.session.userId
    }).populate("books");
    res.status(200).json(userData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const newBook = await db.Books.create(req.body.data);
    await db.User.findOneAndUpdate(
      { _id: req.session.userId },
      { $push: { books: newBook._id } },
      { new: true }
    );
    res.status(200).json(newBook);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req,res) => {
  try {
    const deletedBook = await db.Books.deleteOne({_id: req.params.id});
    res.status(200).json(deletedBook);
  } catch(err) {
    console.log(err);
    res.status(500).json(err);
  }
})

module.exports = router;
