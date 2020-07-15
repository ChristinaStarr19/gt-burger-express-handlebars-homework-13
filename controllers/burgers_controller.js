var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    console.log("The function is running");
    res.render("index", { burgers: data });
  });
});

// router.post("/api/burgers", function(req, res) {
//   burger.insertOne([
//     "burger_name", "devoured"
//   ], [
//     req.body.burger_name
//   ], function(result) {
//     // Send back the ID of the new quote
//     res.json({ id: result.insertId });
//   });
// });

router.post("/api/burgers", function(req, res) {
  burger.insertOne([
    "burger_name", "devoured"
  ], [
    req.body.burger_name, false
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function(req, res) {
  burger.updateOne({devoured: true},"id=" + req.params.id, function(result) {
    console.log(result);
  })
})
// Export routes for server.js to use.
module.exports = router;
