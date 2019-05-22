const router = require("express").Router();
const goalsController = require("../../controllers/goalsController");

// Matches with "/api/books"
router.route("/")
  .get(goalsController.findAll)
  .post(goalsController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(goalsController.findById)
  .put(goalsController.update)
  //.delete(goalsController.remove);

router
  .route("/:id/like")
  .put(goalsController.like)

router.route("/likes")
.post((req, res) => {console.log("req")}) 

module.exports = router;

