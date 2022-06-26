import axios from "axios";

export default {
    createUser: function(userData) {
        return axios.post("/api/users", userData);
    },
    deleteUser: function(id) {
        return axios.delete("api/users/" + id);
    },
};