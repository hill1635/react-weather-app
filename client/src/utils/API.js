import axios from "axios";

export default {
    createUser: function(userData) {
        return axios.post("api/users/", userData);
    },
    deleteUser: function(id) {
        return axios.delete("api/users/" + id);
    },
    login: function(userData) {
        return axios.post("/api/users/login", userData);
    },
    logout: function() {
        return axios.post("/api/users/logout");
    },
    checkSession: function() {
        return axios.get("/api/users/login");
    },
    updateUserLocations: function(id) {
        return axios.put("/api/users/" + id + "/locations");
    },
    getUserData: function(id) {
        return axios.get("/api/users/" + id);
    },
    updateSettings: function(id) {
        return axios.put("/api/users/" + id);
    },
    getLocation: function(id) {
        return axios.get("/api/places/" + id);
    },
    addLocation: function(locationData) {
        return axios.post("/api/places/", locationData);
    },
    updateLocation: function(id, locationData) {
        return axios.put("/api/places/" + id, { locationData });
    },
    searchLocation: function(search) {
        return axios.get("https://api.mapbox.com/geocoding/v5/mapbox.places/" + search + ".json?types=place&access_token=" + process.env.REACT_APP_MAPBOX_API_KEY);
    },
    getSevenDay: function(lat, long) {
        return axios.get("https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + long + "&exclude=minutely&units=imperial&appid=" + process.env.REACT_APP_WEATHERMAP_API_KEY);
    },
    getCurrent: function(lat, long) {
        return axios.get("https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + "&units=imperial&appid=" + process.env.REACT_APP_WEATHERMAP_API_KEY);
    },
    getAQI: function(lat, long) {
        return axios.get("http://api.openweathermap.org/data/2.5/air_pollution?lat=" + lat + "&lon=" + long + "&appid=" + process.env.REACT_APP_WEATHERMAP_API_KEY);
    },
    getAQIForecast: function(lat, long) {
        return axios.get("http://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=" + lat + "&lon=" + long + "&appid=" + process.env.REACT_APP_WEATHERMAP_API_KEY);
    }
};