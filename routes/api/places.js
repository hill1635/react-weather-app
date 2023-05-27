const router = require("express").Router();
const placeController = require("../../controllers/placeController");

router
    .route("/")
    .post(placeController.create);

router
    .route("/:id")
    .get(placeController.get);

router
    .route("/:id")
    .put(placeController.updateForecast);


router
    .route("/:id")
    .put(placeController.updateHistorical);

module.exports = router;