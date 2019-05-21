const router = require("express").Router();
const goalRoutes = require("./books");

// Book routes
router.use("/books", goalRoutes);

module.exports = router;
