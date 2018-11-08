const router = require("express").Router();
const userController = require("../../controllers/usersController");

router
    .route("/answers")
    .post(userController.create)

// Sends all the answers THROUGH POSTMAN
router
    .route("/answers/all")
    .get(userController.findAll)

// Sends all the answers THROUGH POSTMAN
router
    .route("/answers/:id")
    .get(userController.findByQuest)
// .post(userController.create)
// .put(userController.update)


module.exports = router;
