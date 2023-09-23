import React, { useEffect, useState } from "react";
import Location from "../../components/location/Location";


function LocationsDB(props) {
    const [locations, setLocations] = useState([]);
    
    useEffect(() => {
        setLocations(props.locations);
    }, [props]);

    if (Object.keys(locations).length > 0) {
        return (
            <div className="saved">
            {locations.map((locationData) => {
                return <Location key={locationData.name} data={locationData} locations={locations} setLocation={setLocations} />
            })}
        </div>
        );
    }
}

export default LocationsDB;