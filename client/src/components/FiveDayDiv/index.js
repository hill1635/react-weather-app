import React from "react";
import DeleteBtn from "../DeleteBtn";

function FiveDayDiv(props) {

  return (
    <div className="fiveDayDiv">
      {props.locations.map((location) => (
        <div key={location.id} data-id={location.id}>
          <h1>{location.name}</h1>
          <span>Day One</span>
          <span>Day Two</span>
          <span>Day Three</span>
          <span>Day Four</span>
          <span>Day Five</span>
          <DeleteBtn locations={props.locations} setLocations={props.setLocations} getLocations={props.getLocations}/>
        </div>
      ))}
    </div>
  );
}

export default FiveDayDiv;
