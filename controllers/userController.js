const db = require("../models/user");
const bcrypt = require("bcrypt");

module.exports = {
    create: function (req, res) {
        req.body.password = bcrypt.hashSync(req.body.password, 10);
        db. create(req.body)
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.findById({ _id: req.session.userId }, req.body)
            .then((dbModel) => dbModel.remove())
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err));
    },
};