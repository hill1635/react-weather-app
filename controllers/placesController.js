const db = require("../models/place");

module.exports = {
    create: function (req, res) {
        db.create(req.body)
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err));
    },
    get: function (req, res) {
        console.log("getLocations: ", req.body);
        // db.find({ _id: req.session.placeId })
        //     .then((dbModel) => { res.json(dbModel) })
        //     .catch((err) => res.status(500).json(err));
    },
    remove: function (req, res) {
        console.log("remove: ", req.body);
        // db.findById({ _id: req.session.placeId }, req.body)
            // .then((dbModel) => dbModel.remove())
            // .then((dbModel) => res.json(dbModel))
            // .catch((err) => res.status(422).json(err));
    },
    updateForecast: function (req, res) {
        console.log("updateForecast: ", req.body);
        // db.findOneAndUpdate(req.session._id, { forecast: req.params.id })
            // .catch((err) => res.status(500).json(err));
    },
    updateHistorical: function (req, res) {
        console.log("updateHistorical:", req.body);
        // db.findOneAndUpdate(req.session._id, { historical: req.params.id })
        //     .catch((err) => res.status(500).json(err));
    },
};