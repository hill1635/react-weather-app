import React, { useEffect} from "react";
import API from "../../utils/API";

function DeleteBtn(props) {
    
    useEffect(() => {
        console.log("props:", props);
    });
    // var locations = props.locations;
    // var info = (id) => {
    //     var index = locations.findIndex(obj => obj.id == id);
    //     locations.splice(index, 1);
    //     API.updateLocations(JSON.stringify(locations));
    //     props.setLocations(locations);
    // };

    return (
        <button>Delete</button>
    );
}

export default DeleteBtn;