import React from "react";
import DeleteBtn from "../DeleteBtn";

function FiveDayDiv(props) {
var propsArray = [...props.locations];

  return (
    <div className="fiveDayDiv">
      {props.locations.map((location) => (
        <div key={props.locations.indexOf(location)}>
          <h1>{location}</h1>
          <span>Day One</span>
          <span>Day Two</span>
          <span>Day Three</span>
          <span>Day Four</span>
          <span>Day Five</span>
          <DeleteBtn />
        </div>
      ))}
    </div>
  );
}

export default FiveDayDiv;
