const router = require("express").Router();
const userController = require("../../controllers/usersController");

router
    .route("/answers")
    .post(userController.create)

// Sends all the answers THROUGH POSTMAN
router
    .route("/answers/all")
    .get(userController.findAll)

//this route will be for each profile     
router
    .route("/answers/all/:UID")
    .get(userController.findByUID)    

// Sends all the answers based on question THROUGH POSTMAN
router
    .route("/answers/:id")
    .get(userController.findByQuest)
// .post(userController.create)
// .put(userController.update)


module.exports = router;
