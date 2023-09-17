const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PlaceSchema = new Schema({
    id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    lat: {
        type: Number,
        required: true,
    },
    long: {
        type: Number,
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