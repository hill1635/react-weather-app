const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PlaceSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    forecast: {
        type: ObjectId
    },
    historical: {
        type: ObjectId
    },
    lastUpdated: {
        type: Date
    }
});

const Place = mongoose.model("Place", PlaceSchema);

module.exports = Place;