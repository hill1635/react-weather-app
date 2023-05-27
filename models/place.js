const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PlaceSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    forecast: {
        type: Object
    },
    historical: {
        type: Object
    },
    lastUpdated: {
        type: Date
    }
});

const Place = mongoose.model("Place", PlaceSchema);

module.exports = Place;