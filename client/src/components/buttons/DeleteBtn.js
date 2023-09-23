import React, { useEffect} from "react";
import API from "../../utils/API";

function DeleteBtn(props) {
    
    var deleteLocation = () => {
        var locations = props.locations;
        var userLocations = locations.map((location) => location.id);
        var index = locations.findIndex(obj => obj.id == props.placeId);
        var userIndex = userLocations.indexOf(props.placeId);
        locations.splice(index, 1);
        userLocations.splice(userIndex, 1);
        API.updateUserLocations(JSON.stringify(userLocations));
        props.setLocations(locations);
    };

    useEffect(() => {
    }, [props]);
    // var locations = props.locations;
    // var info = (id) => {
    //     var index = locations.findIndex(obj => obj.id == id);
    //     locations.splice(index, 1);
    //     API.updateLocations(JSON.stringify(locations));
    //     props.setLocations(locations);
    // };

    return (
        <button onClick={deleteLocation}>Delete</button>
    );
}

export default DeleteBtn;