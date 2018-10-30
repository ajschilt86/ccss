const router = requrie("express").Router();
const userController = require("../../controllers/usersController");

router
    .route("questions/:id")
    .get(userController.findByQuest)

router
    .route("users/:id")
    .get(userController.findByUID)
    .post(userController.create)
    .put(userController.update)

module.exports = router;
