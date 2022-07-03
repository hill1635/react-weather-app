import React from "react";
import DeleteBtn from "../DeleteBtn";

function FiveDayDiv(props) {

  return (
    <div className="fiveDayDiv">
      {props.locations.map((location) => (
        <div key={props.locations.id}>
          <h1>{location.name}</h1>
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
