const router = require("express").Router();
const userController = require("../../controllers/usersController");

router
    .route("/profile")
    .get(userController.findByQuest)
    .post(userController.create)
router
    .route("users/:id")
    .get(userController.findByUID)
    .post(userController.create)
    .put(userController.update)

module.exports = router;
