const router = requrie("express").Router();
const userController = require("../../controllers/usersController");

// Need to put a route here for displaying the quesitons...

router
    .route("/:id")
    .get(userController.findById)
    .put(userController.update)

module.exports = router;
