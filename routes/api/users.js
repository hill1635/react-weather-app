const router = require("express").Router();
const userController = require("../../controllers/userController");

router
    .route("/")
    .post(userController.create);

router
    .route("/:id")
    .delete(userController.remove);

router
    .route("/login")
    .post(userController.login);

router
    .route("/logout")
    .post(userController.logout);

router
    .route("/:id")
    .put(userController.addLocation);

router
    .route("/:id")
    .get(userController.getLocations);

module.exports = router;