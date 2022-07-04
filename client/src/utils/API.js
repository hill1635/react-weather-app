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
    getLocations: function(id) {
        return axios.get("/api/users/" + id);
    },
    updateLocations: function(id) {
        return axios.put("/api/users/" + id);
    },
    searchLocation: function(search) {
        return axios.get("https://maps.googleapis.com/maps/api/place/findplacefromtext/json?fields=formatted_address%2Cname%2Cgeometry&input=" + search + "&inputtype=textquery&key=" + process.env.REACT_APP_GOOGLE_API_KEY);
    },
    getSevenDay: function(lat, long) {
        return axios.get("https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + long + "&exclude=minutely&units=imperial&appid=" + process.env.REACT_APP_WEATHERMAP_API_KEY);
    },
    getCurrent: function(lat, long) {
        return axios.get("https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + "&units=imperial&appid=" + process.env.REACT_APP_WEATHERMAP_API_KEY);
    },
    getAQI: function(lat, long) {
        return axios.get("https://api.airvisual.com/v2/nearest_station?lat="+ lat + "&lon=" + long + "&key=" + process.env.REACT_APP_AIRVISUAL_API_KEY);
    },
};