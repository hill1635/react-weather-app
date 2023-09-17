const db = require("../models/place");

module.exports = {
    create: function (req, res) {
        db.create(req.body)
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err));
    },
    get: function (req, res) {
        db.findOne({ id: req.params.id })
            .then((dbModel) => { res.json(dbModel) })
            .catch((err) => {res.status(500).json(err)});
    },
    remove: function (req, res) {
        console.log("remove: ", req.body);
        // db.findById({ _id: req.session.placeId }, req.body)
            // .then((dbModel) => dbModel.remove())
            // .then((dbModel) => res.json(dbModel))
            // .catch((err) => res.status(422).json(err));
    },
    updateForecast: function (req, res) {
        db.findOneAndUpdate(req.params.id, { forecast: req.body.locationData.forecast })
            .catch((err) => res.status(500).json(err));
    },
    updateHistorical: function (req, res) {
        console.log("updateHistorical:", req.body);
        // db.findOneAndUpdate(req.session._id, { historical: req.params.id })
        //     .catch((err) => res.status(500).json(err));
    },
};